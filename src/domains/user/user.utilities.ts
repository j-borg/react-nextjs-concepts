export const getUserQueryKey = ({ guid }: { guid?: string }) => {
  return `user-${guid}`
}
