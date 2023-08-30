interface ChangePercentFormatterProps {
  children: string;
}

export const PriveVariation = ({ children }: ChangePercentFormatterProps) => {
  const formattedChangePercent = (changePercent: string) => {
    const prefix = changePercent.charAt(0) !== "-" ? "+" : "-";
    const absoluteValue = changePercent.replace(/[+-]/g, "");
    const formattedValue = `${prefix}${absoluteValue.slice(0, 4)}%`;

    return formattedValue;
  };

  return <p className={`font-semibold text-lg ${children.charAt(0) === "-" ? "text-red-500" : "text-green-500"}`}>{formattedChangePercent(children)}</p>;
};
