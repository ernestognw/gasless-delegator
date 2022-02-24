import { useMemo } from "react";

const useTruncatedAddress = (
  address: string | undefined | null
): string | undefined => {
  const truncated = useMemo(() => {
    if (address) {
      const length = address.length;
      const start = address.substring(0, 6);
      const end = address.substring(length - 4, length);
      return `${start}...${end}`;
    }
  }, [address]);

  return truncated;
};

export default useTruncatedAddress;
