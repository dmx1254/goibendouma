import React, { useState } from "react";
import { useSelector } from "react-redux";

const DofusKamas = () => {
  const { user } = useSelector((state) => state.user);
  const { eurorate } = useSelector((state) => state.eurorate);
  const { dollarate } = useSelector((state) => state.dollarate);
  const { usdtra } = useSelector((state) => state.usdtra);
  // const { cnyrate } = useSelector((state) => state.cnyrate);
  // const {cnyrate} = useSelector((state) => state.cnyrate);

  const { servers } = useSelector((state) => state.servers);

  console.log(servers);

  const [data, setData] = useState(
    servers.filter((server) => server.serverCategory === "dofus-kamas")
  );
  const { language } = useSelector((state) => state.language);

  return (
    <div className="dofus-kamas">
      <h1 className="dofus-kamas-title">Dofus Kamas</h1>
      <table id="kamas">
        <thead>
          {language === "anglais" ? (
            <tr>
              <th
                style={{
                  fontSize: "12px",
                }}
              >
                Server
              </th>
              <th>
                <div className="divider">
                  <span>Price</span>
                  <span>(DH)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>USDT</span>
                  <span>(TRC20)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paypal</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Skrill</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paylib</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Sepa</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Payeer</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th
                style={{
                  fontSize: "12px",
                }}
              >
                Status
              </th>
            </tr>
          ) : (
            <tr>
              <th
                style={{
                  fontSize: "12px",
                }}
              >
                Serveur
              </th>
              <th>
                <div className="divider">
                  <span>Prix</span>
                  <span>(DH)</span>
                </div>{" "}
              </th>
              <th>
                <div className="divider">
                  <span>USDT</span>
                  <span>(TRC20)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paypal</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Skrill</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paylib</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Sepa</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Payeer</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th
                style={{
                  fontSize: "12px",
                }}
              >
                Status
              </th>
            </tr>
          )}
        </thead>
        {language === "anglais" ? (
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.serverName}</td>
                <td>
                  {item.serverPriceDh}
                  <span className="currency-color">Dhs/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / usdtra).toFixed(2)}
                  <span className="currency-color"> Usdt/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color"> €/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <a href="javascript:void(Tawk_API.toggle())">
                  <td
                    className={
                      item.serverStatus === "Disponible"
                        ? "success"
                        : item.serverStatus === "Stock complet"
                        ? "no-success"
                        : "quickly"
                    }
                  >
                    {item.serverStatus === "Disponible" && "Clic here to sell"}
                    {item.serverStatus === "Vendre rapidement" &&
                      "Sell quickly"}
                    {item.serverStatus === "Stock complet" && "Full Stock"}
                  </td>
                </a>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.serverName}</td>
                <td>
                  {item.serverPriceDh}
                  <span className="currency-color">Dhs/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / usdtra).toFixed(2)}
                  <span className="currency-color">Usdt/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <td>
                  {(item.serverPriceDh / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                <a href="javascript:void(Tawk_API.toggle())">
                  <td
                    className={
                      item.serverStatus === "Disponible"
                        ? "success"
                        : item.serverStatus === "Stock complet"
                        ? "no-success"
                        : "quickly"
                    }
                  >
                    {item.serverStatus === "Disponible"
                      ? "Cliquer ici pour vendre"
                      : item.serverStatus}
                  </td>
                </a>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default DofusKamas;
