$(function () {
  $(".macth").click(function () {
    $("#winnerModalLabel").text(
      `เกมที่ ${$(this).data("id") + 1} แผนที่ ${$(this).data("map")}`
    );
    $("#winnerModalSave").data("id", $(this).data("id"));
  });

  $("#winnerModalSave").click(function () {
    $("#winnerMap" + $(this).data("id")).attr("src", $("#imageLink").val());
    $("#imageLink").val("");
  });
});
