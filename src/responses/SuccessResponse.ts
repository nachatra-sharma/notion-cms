interface SuccessResponseProps {
  message: string
  data: any
}

export const SuccessResponse = (props: SuccessResponseProps) => {
  const { message, data } = props
  return {
    success: true,
    message: message,
    data: { data },
    error: {},
  }
}
