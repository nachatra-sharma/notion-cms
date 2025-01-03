interface RejectedResponseProps {
  message: string
  error: string
}

export const RejectedResponse = (props: RejectedResponseProps) => {
  const { message, error } = props
  return {
    success: false,
    message: message,
    data: {},
    error: { error },
  }
}
