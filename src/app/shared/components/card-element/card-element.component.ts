import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-element',
  standalone: true,
  imports: [],
  templateUrl: './card-element.component.html',
  styleUrl: './card-element.component.css'
})
export class CardElementComponent implements OnInit{
  
  @Input() infoElement!: any;
  @Input() identifier!: string;

  element: any = {
    nameOrTitle: "",
    content: "",
    image: ""
  }
    
  ngOnInit(): void {
    var image = `${this.infoElement.thumbnail.path}.${this.infoElement.thumbnail.extension}`

    switch(this.identifier){
      case "character":
        this.element.nameOrTitle = this.infoElement.name;
        this.element.content = this.infoElement.description == "" 
                                ?"No tine descripcion"
                                : this.infoElement.description;
        this.element.image = image;
        //console.log(this.element);
        break;
      case "comic":
        this.element.nameOrTitle = this.infoElement.title;
        this.element.content = "No tine descripcion";
        this.element.image = image;
        //console.log(this.element);
        break;
      case "serie":
        this.element.nameOrTitle = this.infoElement.title;
        this.element.content = this.infoElement.description == null 
                                ?"No tine descripcion"
                                : this.infoElement.description;
        this.element.image = image;
        //console.log(this.element);
        break;
    }
  }

}
