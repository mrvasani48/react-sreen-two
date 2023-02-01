import { Link } from "@mui/joy";

export function NavLink(props) {
  return (
    <Link
      variant="solid"
      backgroundColor="Neutral"
      borderRadius="15px 15px 0px 0px;"
      padding={1}
      underline="none"
      sx={{ minWidth: "100px", backgroundColor: props.active ? "#002e64" : "#eeeee4", color: props.active ? "#eee" : "#002e64" }}
    >
      {props.label}
    </Link>
  );
}
