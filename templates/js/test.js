var board_column_list = ['id', '게시물명', '작성자']

function load_top_table() {
  'document.write("<tr>");'
  for(var i=0;i<board_column_list.length;i++){
    document.write("<th> "+board_column_list[i]+" </th>");
  }
  'document.write("</tr>");'
}

function make_table(rows, cols){
  '--! var row = rows; !--'
  'document.write(rows+", "+cols);'
  'document.write("<table>");'
  for(var i=0;i<parseInt(rows); i++){
    document.write("<tr>");
    for(var j=0;j<parseInt(cols); j++){
      document.write("<td> "+i+","+j+" </td>");
    }
    document.write("</tr>");
  }
  'document.write("</table>");'
}
