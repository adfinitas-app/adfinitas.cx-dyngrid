function launchCustomHead(segment) {
  let data = _DATA_CUSTOM_HEAD[segment];
  if (typeof(data) == "undefined") {
    console.error("Invalid segment");
    return;
  }
  $(".custom-head-title").html(data.txt);
  $(".custom-head-img").attr("src", data.img);
  if (typeof(woopra) != "undefined") {
    woopra.track("personnalisation", {
      "header_segment": segment,
      "header_value": data.img
    });
  }
}
