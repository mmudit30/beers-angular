import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ProductsService {
    products=[
        { "isfav":false, "product_id":1,
         "desc":"Some quick example text to build on the card title and make up the bulk of the card's content.",
          "image":"../assets/bottles/b3.jpg" 
          ,"name": "Buzz"},
        { "isfav":true, "product_id":2, 
        "desc":"Some quick example text to build on the card title and make up the bulk of the card's content.", 
         "image":"../assets/bottles/b1.jpg" 
         ,"name": "Trashy Blonde"},
        { "isfav":false, "product_id":3,
         "desc":"Some quick example text to build on the card title and make up the bulk of the card's content.",
          "image":"../assets/bottles/b4.png" 
          ,"name": "Berliner Weisse With Yuzu - B-Sides"},
        { "isfav":false, "product_id":4,
         "desc":"Some quick example text to build on the card title and make up the bulk of the card's content.",
          "image":"../assets/bottles/b2.jpg" 
          ,"name": "Pilsen Lager"},
        { "isfav":false, "product_id":5,
         "desc":"Some quick example text to build on the card title and make up the bulk of the card's content.",
           "image":"../assets/bottles/b4.png"
            ,"name": "Avery Brown Dredge"},
        { "isfav":true, "product_id":6, 
        "desc":"Some quick example text to build on the card title and make up the bulk of the card's content.", 
        "image":"../assets/bottles/b3.jpg" ,
        "name": "Electric India"}
      ];
    
    getProducts(){        
        return this.products;
    }

    sendProducts(new_product) {
        this.products=new_product;
    }

}