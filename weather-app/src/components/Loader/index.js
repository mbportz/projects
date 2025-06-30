import "./Loader.scss";

export function Loader() {
   const loader = $("<asside></asside>")
      .addClass("loader-container")
      .html(`<div class="loader"></div>`);

   return loader;
}
