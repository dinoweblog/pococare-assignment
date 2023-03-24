const WelcomePage = () => {
  console.log(document.cookie);
  return (
    <div>
      <h1 style={{ marginTop: 50, textAlign: "center", fontSize: 50 }}>
        Welcome
      </h1>
    </div>
  );
};

export default WelcomePage;
