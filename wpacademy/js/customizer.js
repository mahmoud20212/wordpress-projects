/* global wp, jQuery */
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function ($) {
  // Preview-only rules also cover hover states and newly rendered elements.
  function previewColor(setting, selectors, property) {
    wp.customize(setting, function (value) {
      var style = $("<style>", { id: "wpacademy-preview-" + setting }).appendTo(
        "head",
      );
      value.bind(function (to) {
        if (!/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(to)) {
          style.text("");
          return;
        }
        style.text(selectors + " { " + property + ": " + to + " !important; }");
      });
    });
  }

  // Site title and description.
  wp.customize("blogname", function (value) {
    value.bind(function (to) {
      $(".site-title a").text(to);
    });
  });
  wp.customize("blogdescription", function (value) {
    value.bind(function (to) {
      $(".site-description").text(to);
    });
  });

  // Header text color.
  wp.customize("header_textcolor", function (value) {
    value.bind(function (to) {
      if ("blank" === to) {
        $(".site-title, .site-description").css({
          clip: "rect(1px, 1px, 1px, 1px)",
          position: "absolute",
        });
      } else {
        $(".site-title, .site-description").css({
          clip: "auto",
          position: "relative",
        });
        $(".site-title a, .site-description").css({
          color: "#" + to.replace(/^#/, ""),
        });
      }
    });
  });

  // Header Links color.
  previewColor(
    "header_links_color",
    ".site-header a:not(.site-title a), .site-header a:not(.site-title a):visited, .site-header a:not(.site-title a):hover, .site-header a:not(.site-title a):focus",
    "color",
  );

  // Content Links color.
  previewColor(
    "content_links_color",
    ".site-main a, .content-area a, .widget-area a, .post a, .widget a",
    "color",
  );

  // Header color.
  previewColor(
    "header_bg_color",
    ".site-header, .main-navigation ul, .main-navigation li, .main-navigation a, .menu-bar ul, .menu-bar li, .menu-bar a",
    "background-color",
  );

  // Footer color.
  previewColor("footer_bg_color", ".site-footer", "background-color");

  // Footer text.
  wp.customize("footer_text", function (value) {
    value.bind(function (to) {
      // Update custom color CSS.
      $(".site-info").text(to);
    });
  });
})(jQuery);
