export const formatDate = (
  dateString: string,
  type: "start" | "end"
): string => {
  const [month, year] = dateString.split("/");
  if (type === "start") return `${year}-${month}-01`;
  return `${year}-${month}-31`;
};
