/* This tells Google to serve your HTML file when the web app is visited */
function doGet() 
{
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Loudness Calculator')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setFaviconUrl('https://i.postimg.cc/cJYypgTw/Loudness-Calculator.png');
}

/* The logic of the loudness calculator */
function LoudnessCalculator(minimum, maximum) 
{
  /* Converting the dBFS values to dB RMS */
  var minRms = minimum - 3.01;
  var maxRms = maximum - 3.01;
  /* Calculating the average */
  var average = (maxRms + minRms) / 2.0;
  return average;
}