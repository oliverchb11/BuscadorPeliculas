import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "series",
})
export class SeriesPipe implements PipeTransform {
  transform(value: any, args: any): any {
    const resultadoPost = [];
    for (const post of value) {
      if (post.original_name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultadoPost.push(post);
      }
    }
    return resultadoPost;
  }
}
