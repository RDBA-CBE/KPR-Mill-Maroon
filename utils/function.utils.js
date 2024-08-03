import { getReportTableData } from "./axios.utils";

export const transformData = (data) => {
  const baseUrl =
    "https://file.kprmilllimited.com/file/wp-content/uploads/cfdb7_uploads/";
  const result = [];

  Object.keys(data).forEach((key) => {
    if (key.startsWith("list") && data[key]) {
      const index = key.match(/\d+/)[0];
      const fileKey = `file-pdf-${index}cfdb7_file`;

      if (data[fileKey]) {
        result.push({
          list: data[key],
          "file-pdf-cfdb7_file": baseUrl + data[fileKey],
        });
      } else {
        result.push({
          list: data[key],
          "file-pdf-cfdb7_file": "",
        });
      }
    }
  });

  return result;
};

export const groupedByYear = async (id) => {
  const res = await getReportTableData();
  //Group by ID
  const separatedData = res?.reduce((acc, obj) => {
    const formPostId = obj.form_post_id;
    if (!acc[formPostId]) {
      acc[formPostId] = [];
    }
    acc[formPostId].push(obj);
    return acc;
  }, {});
  const datas = separatedData[id];
  //Table Format
  const tableData =
    datas?.map((item) => ({
      title: item.form_value?.title,
      link: transformData(item.form_value),
      id: item?.id,
      year: item?.form_value?.yearselection[0],
      ref:item?.form_value?.ref,
      sub: item?.form_value?.sub
    })) || [];

  //Group By year

  const groupedData = Object.values(
    tableData.reduce((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = { title: item.year, data: [] };
      }
      acc[item.year].data.push(item);
      return acc;
    }, {})
  );
  return groupedData?.reverse();
};
