type PrimaryButtonProps = {
  actionType?: string;
};

export default function PrimaryButton({
  actionType = "Add",
}: PrimaryButtonProps) {
  return <button>Click to {actionType}</button>;
}
