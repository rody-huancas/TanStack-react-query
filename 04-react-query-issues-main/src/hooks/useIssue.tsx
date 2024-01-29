import { useQuery } from "@tanstack/react-query";
import { Issue } from "../issues/interfaces/issue";
import { githubApi } from "../api/githubApi";
import { sleep } from "../helpers/sleep";

const getIssueInput = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi<Issue>(`/issues/${issueNumber}`);
  return data;
};

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  sleep(2);
  const { data } = await githubApi<Issue[]>(`/issues/${issueNumber}/comments`);
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssueInput(issueNumber),
  });

  const commentsQuery = useQuery({
    queryKey: ["issue", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    enabled: issueQuery.data !== undefined,
  });

  return { issueQuery, commentsQuery };
};
