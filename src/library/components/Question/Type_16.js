import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, FlatList, ScrollView, useWindowDimensions, Dimensions } from "react-native";
import res from "res/R";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-elements";
import { Table, Row, TableWrapper, Cell,Rows } from "react-native-table-component";
import Type_3 from "./Type_3";
import Type_14 from "./Type_14";

export const deviceWidth = Dimensions.get('window').width;

const Type_16 = ({ data }) => {
  const [actionRemove, setActionRemove] = useState(false);

  const [tableHead, setTableHead] = useState([
    // "NOMBRE COMÚN",
    // "NOMBRE CIENTÍFICO",
    // "CAPTURA - TON",
    // "remove",
  ]);
  const [localFlexArr, setLocalFlexArr] = useState([]);
  const [tableData, setTableData] = useState([
    // ["1", "2", "3", "4"],
    // ["a", "b", "c", "d"],
    // ["1", "2", "3", "4"],
    // ["a", "b", "c", "d"],
  ]);
  
  const [form, setForm] = useState({ 
  })
  const calculateFlexArr = () => {
    let tempFlexArr = [];
    let num = 1;
    let temTableHead = [];
    data.data.map((item, index) => {
      if (item.title === "remove") {
        num = 0.3;
        item = "";
        setActionRemove(true);
      }
      temTableHead.push(item);
      tempFlexArr = [...tempFlexArr, num];
    });
    setTableHead(temTableHead);
    setLocalFlexArr(tempFlexArr);
  };

  const onChange = (value,nombre) => {

    setForm({
      ...form,
      [nombre]:value
    })

   


  }

  const recorrer= () => {


 
    let arreglo = []
    for (let clave in form){
      // console.log(form[clave]);
      arreglo.push(form[clave])
    }


    let temData = tableData;
    temData = [...temData, [...arreglo]];
    setTableData(temData);

  }
 

  useEffect(() => {
    calculateFlexArr();
  }, []);
 
  return (
    <View style={styles.container}>
      <Text style={styles.lblTitle}>{data.title}</Text>
      <View style={styles.headerInputs}>
        {/* <Text style={styles.lblTitleHeaderInputs}>Nuevo Elemento</Text> */}
        <View style={styles.gpElementGroup}>
          {tableHead.map(
            (item, id) =>
              (item !== "" && item.data === undefined) ? (
                <TextInput
                  key={id}
                  placeholder={item.title}
                  keyboardType="default"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: res.colors.darkGray,
                    marginHorizontal: 20,
                  }}
                  onChangeText={(text) => onChange(text,item?.id) }
                />
              ) :
                (item !== "" && item.data !== undefined) &&
                <Type_14
                  key={id}
                  data={{
                    title: item.title,
                    placeHolder: item.title,
                    data: item.data,
                    single: true,
                    hideTags: true,
                    styleContainer: {
                      borderWidth: 0,
                      marginHorizontal: 0,
                      paddingHorizontal: 0,
                      paddingBottom: 0,
                    }
                  }}
                />
          )}
          <Button
            title="Agregar"
            type="outline"
            buttonStyle={{ marginTop: 30, marginHorizontal:20 }}
            titleStyle={{ color: res.colors.blue }}
            icon={
              <IoniconsIcon
                name="add-circle-outline"
                style={[styles.icGpElementItem, { color: res.colors.blue }]}
              />
            }
            onPress={() => {
              recorrer()
            }}
          />
        </View>
      </View>

      {tableHead && (
        <ScrollView horizontal >
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <TableWrapper style={styles.row}>
              {tableHead.map((item, id) => (
                <Cell
                  key={id}
                  style={{ width:deviceWidth / 2.5 }}
                  data={<Text style={styles.headText}>{item.title}</Text>}
                />
              ))}
            </TableWrapper>
            {tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    style={{ width:deviceWidth / 2.5}}
                    key={cellIndex}
                    data={
                      tableHead.length === cellIndex + 1 && actionRemove ? (
                        <IoniconsIcon
                          onPress={() => {
                            let temData = tableData.filter(
                              (item, id) => id !== index
                            );
                            setTableData(temData);
                          }}
                          name="remove-circle-outline"
                          style={[
                            styles.icGpElementItem,
                            { flex: localFlexArr[cellIndex] },
                          ]}
                        />
                      ) : (
                        <Text style={styles.textData}>{cellData}</Text>
                      )
                    }
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </ScrollView>
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    marginVertical: 15,
  },
  lblTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  headerInputs: {
    borderTopEndRadius: 5,
    borderRadius: 5,
    borderColor: res.colors.blueGray,
    paddingBottom: 30,
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  lblTitleHeaderInputs: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Calibri",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  gpElementGroup: {
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(0,0,0,1)",
    marginTop: 5,
  },
  headTable: {
    backgroundColor: "#f1f8ff",
    // flex: 1,
  },
  row: { flexDirection: "row", },
  headText: {
    marginHorizontal: 5,
    marginVertical: 5,
    textAlign: "center",
    fontWeight: "bold",
   
  },
  textData: {
    margin: 6,
    marginLeft: 10,
    color: res.colors.darkText,
    // flex: 1,
  
  },
  footerTable: {
    height: 40,
    backgroundColor: "#c8e1ff",
    flex: 1,
  },
  footerText: { textAlign: "center" },
  icGpElementItem: {
    color: res.colors.red,
    fontSize: 25,
    alignSelf: "center",
  },
});
export default Type_16;
