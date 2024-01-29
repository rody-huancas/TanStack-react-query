import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Issue } from "../interfaces/issue";

interface Props {
  issue: Issue;
}

export const IssueComment: FC<Props> = ({ issue }) => {
  const {
    body,
    user: { avatar_url },
  } = issue;

  return (
    <div className="col-12">
      <div className="card border-white mt-2">
        <div className="card-header bg-dark">
          <img src={avatar_url} alt="User Avatar" className="avatar" />
          <span className="mx-2">Pandaiolo commented</span>
        </div>
        <div className="card-body text-dark">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
