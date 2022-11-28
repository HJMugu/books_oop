class UI {
    // help function to add DOMM element


   addUIElemment(name, classname = '', textcontent = '', atributes = {}){
       //create elemment
       const element = document.createElement(name);
       //add css style to element
       if(classname !== ''){
           element.className = classname
       }
       //add text content to element
       element.appendChild(document.createTextNode(textcontent))
       //add atributes to element
       if(Object.keys(atributes).length > 0){
           for(let key in atributes){
               element.setAttribute(key, atributes[key])
           }
       }
       return element
   }
   addBook(book){
       // create <tr> element
       const tr = this.addUIElemment('tr');
       //td for title, author and isbn
       for(let name in book){

           // create <td> element and add text value
           let td = this.addUIElemment('td', '', book[name]);

           // add td to tr
           tr.appendChild(td);

       }
       // X link
       // create <td> element
       let td = this.addUIElemment('td');
       // create <a> element
       const link = this.addUIElemment('a', '', 'X', {'href': '#'});
       //add link to td
       td.appendChild(link);
       // add td to tr
       tr.appendChild(td);
       // add tr to tbody
       const booksList = document.querySelector('#book-list');
       booksList.appendChild(tr);
   }
}