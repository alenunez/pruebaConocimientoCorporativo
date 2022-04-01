import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarPais'
})
export class BuscarPaisPipe implements PipeTransform {

  transform(value: any,args:any): any {
    const resultPost=[];
    for(const post of value){
      if(post.paisFabricacion.indexOf(args)> -1){
        resultPost.push(post)
      }
    }
    return resultPost;
  }
}
