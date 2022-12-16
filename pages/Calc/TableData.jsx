import React  from "react"; 
import * as XLSX from "xlsx"; 
import { useSelector, useDispatch } from "react-redux";
import { removeList } from "../../store/slice/calcSlice";
import { MdDelete } from "react-icons/md";
 import styles from "../../styles/Elements.module.css";


export default function TableData() {
  const dispatch = useDispatch();

  const listData = useSelector((state) => state.calculation.list);

  console.log(`⬇️ listData ⬇️`, listData)

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(listData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };
 
  const RemoveRow = (id) => {
    return dispatch(removeList(id));
  };

  let isObjectEmpty = Object.keys(listData).length === 0;

  return (
    <div className={styles.table}>
      <button onClick={() => downloadExcel()}>Download Data</button>

      {!isObjectEmpty && (
        <table>
          <thead>
            <tr>
              <th>device</th>
              <th>energy price</th>
              <th>hours per day</th>
              <th>days per month</th>
              <th>kwh</th>
              <th>energy Sum</th>
              {/* <th>€/price</th> */}
              <th>€/monthly</th>
              <th>€/yearly</th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((row) => (
              <tr key={row.id}>
                <td>{row.deviceName}</td>
                <td>{row.energyPrice}</td>
                <td>{row.hoursPerDay}</td>
                <td>{row.daysPerMonth}</td>
                <td>{row.energyConsumption}</td>
                <td>{row.energySum}</td>
                {/* <td>{row.priceSum}</td> */}
                <td>{row.monthlyPriceOfEnergyUsed}</td>
                <td>{row.yearlyPriceOfEnergyUsed}</td>
                <td onClick={() => RemoveRow(row.id)}>
                  <MdDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
