import { useQuery } from "@tanstack/react-query";
import { Label } from "../issues/interfaces/label";
import { githubApi } from "../api/githubApi";
import { sleep } from "../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await githubApi<[]>("/labels", {
    headers: {
      Authorization: null,
    },
  });
  return data;
};

export const useLabels = () => {
  const lablesQuery = useQuery({
    queryKey: ["lables"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    // initialData[]
    // placeholderData []
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
      },
      {
        id: 1205087127,
        node_id: "MDU6TGFiZWwxMjA1MDg3MTI3",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Concurrent%20Features",
        name: "Component: Concurrent Features",
        color: "ffccd3",
        default: false,
      },
    ],
  });

  return lablesQuery;
};
