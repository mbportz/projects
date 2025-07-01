import "./Header.scss";

export function Header({ title, subTitle }) {
   const header = $("<header></header>");

   header.html(`
         <h1>${title}</h1>
         <p>${subTitle}</p>
         <form class="form">
            <input
               id="form-input-location"
               type="text"
               placeholder="Search for a city..."
            />
            <input id="form-submit" type="submit" value="Search" />
         </form>
      `);

   return header;
}
