// Position prop can be one of the following
// left-center, right-center, center, left-bottom, right-bottom, center-top,
// center-bottom, right-top, left-top
// but as hard coding that would be unnecessary especially if there were more than just 9 posiblevalues
// cue in template literals
//Template literals are literals delimited with backtick ( ` ) characters, allowing for multi-line
// strings, string interpolation with embedded expressions, and special constructs called tagged templates.

type HorizontalPositions = "center" | "left" | "right";
type VerticalPositions = "center" | "top" | "bottom";

//but with this, you get the position center-center which is also just center
// type ToastPositions = {
//     position: `${HorizontalPositions}-${VerticalPositions}`
// }

//to fix the center-center happenings
type ToastPositions = {
  position:
    | Exclude<`${HorizontalPositions}-${VerticalPositions}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastPositions) => {
  return <div>Toast Position - {position}</div>;
};
