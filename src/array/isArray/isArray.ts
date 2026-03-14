type TIsArrayArgs = unknown;
type TIsArrayReturn = boolean;

function isArray(value: TIsArrayArgs): TIsArrayReturn {
  return Array.isArray(value);
}

export { isArray };
