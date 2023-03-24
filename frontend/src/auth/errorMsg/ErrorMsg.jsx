const ErrorMsg = ({ errorMsg }) => {
  return (
    <>
      {errorMsg.length !== 0 && (
        <div
          style={{
            border: "1px solid #B2B2B2",
            borderRadius: "4px",
            marginTop: 10,
            color: "#CF0A0A",
            padding: 5,
            backgroundColor: "#F8EDE3",
          }}
        >
          {errorMsg.map((err) => (
            <p>{err?.message}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default ErrorMsg;
