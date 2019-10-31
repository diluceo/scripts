document.addEventListener("DOMContentLoaded", function() {
  var radioButtons = document.getElementsByName("items");
  var radioButtonsTwo = document.getElementsByName("items-two");
  document.addEventListener("change", function(e) {
    if (e.target.name === "items") {
      Array.from(radioButtons).forEach(function(radioButton) {
        if (radioButton.checked) {
          radioButton.parentNode.className = "selected";
        } else {
          radioButton.parentNode.className = "";
        }
      });

      return;
    }

    if (e.target.name === "items-two") {
      Array.from(radioButtonsTwo).forEach(function(radioButton) {
        if (radioButton.checked) {
          radioButton.parentNode.className = "selected";
        } else {
          radioButton.parentNode.className = "";
        }
      });

      return;
    }

    if (e.target.name === "checkItems" || e.target.name === "checkItems-2") {
      if (e.target.checked) {
        e.target.parentNode.className = "selected";
      } else {
        e.target.parentNode.className = "";
      }
    }

    if (e.target.name === "colorPicker") {
      let newColor = tinycolor(e.target.value);
      let brightness = newColor.getBrightness();
      let luminance = newColor.getLuminance();

      if (brightness < 100) {
        newColor.brighten(5);
      }

      if (brightness < 80) {
        newColor.brighten(5);
      }

      if (brightness < 30) {
        newColor.brighten(10);
      }

      if (newColor.isDark()) {
        document.body.style.setProperty("--accent", e.target.value);
        document.body.style.setProperty(
          "--light-accent",
          "#" + newColor.lighten(30).toHex()
        );
        document.body.style.setProperty(
          "--lighter-accent",
          "#" + newColor.lighten(10).toHex()
        );
        document.body.style.setProperty(
          "--lightest-accent",
          "#" + newColor.lighten(5).toHex()
        );
        newColor = tinycolor(e.target.value);
        document.body.style.setProperty(
          "--dark-accent",
          "#" + newColor.darken(40).toHex()
        );
      } else {
        document.body.style.setProperty(
          "--accent",
          "#" + newColor.darken(20).toHex()
        );
        document.body.style.setProperty(
          "--light-accent",
          "#" + newColor.lighten(30).toHex()
        );
        document.body.style.setProperty(
          "--lighter-accent",
          "#" + newColor.lighten(10).toHex()
        );
        document.body.style.setProperty(
          "--lightest-accent",
          "#" + newColor.lighten(5).toHex()
        );
        newColor = tinycolor(e.target.value);
        document.body.style.setProperty(
          "--dark-accent",
          "#" + newColor.darken(60).toHex()
        );
      }
    }
  });
});
