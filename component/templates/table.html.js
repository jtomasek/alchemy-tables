angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("component/templates/table.html",
    "<thead>" +
    "  <tr>" +
    "    <th class=\"table-selection-row\" " +
    "        colspan=\"{{ table.data.columns.length +1 }}\" " +
    "        ng-show=\"table.more_results()\">" +
    "" +
    "        All {{ table.offset }} results shown are currently selected.  " +
    "        <a href=\"\">Select all {{ table.total }} results.</a>" +
    "    </th>" +
    "  </tr>" +
    "  <tr>" +
    "    <th ng-show=\"rowSelect\">" +
    "      <input class=\"select_all\" " +
    "             type=\"checkbox\" " +
    "             name=\"select_all\" " +
    "             ng-model=\"table.all_selected\" " +
    "             ng-change=\"table.select_all()\">" +
    "    </th>" +
    "    <th ng-click=\"table.sort(header)\" " +
    "        ng-show=\"header.show\" " +
    "        ng-repeat=\"header in table.data.columns\" " +
    "        ng-class=\"{ 'active-column' : header.active }\">" +
    "" +
    "        {{ header.display }}" +
    "    </th>" +
    "  </tr>" +
    "</thead>" +
    "<tbody>" +
    "  <tr ng-class=\"{active : row.selected }\" " +
    "      ng-repeat=\"row in table.data.rows\" " +
    "      ng-show=\"show_row(row)\">" +
    "    <td ng-show=\"rowSelect\">" +
    "      <input ng-model=\"row.selected\" " +
    "             type=\"checkbox\" name=\"{{ row.id }}\" " +
    "             value=\"{{ row.id }}\" " +
    "             ng-change=\"adjust_num_selected(row.selected)\">" +
    "    </td>" +
    "    <td ng-show=\"show_cell(cell)\" " +
    "        ng-repeat=\"cell in row.cells\">" +
    "      " +
    "        {{ cell.display }}" +
    "    </td>" +
    "  </tr>" +
    "</tbody>" +
    "");
});
