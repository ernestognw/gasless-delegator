type ButtonProps = {
  onClick: (() => void) | (() => Promise<void>) | undefined;
  children: string;
};
