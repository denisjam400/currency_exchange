const Exchange = () => {
  return (
    <div>
      <h2>Live Exchange Rate</h2>
      <table>
        <thead>
          <tr>
            <p>Inverse</p>
            <p>Amount</p>
            <p>Change (24h)</p>
            <p>Chart</p>
          </tr>
        </thead>
        <tbody>
          <tr>
            <p>USD</p>
            <p>100</p>
            <p>24hrs</p>
            <p>Loading</p>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Exchange;
