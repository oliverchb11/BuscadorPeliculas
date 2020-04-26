import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipesImg",
})
export class PipesImgPipe implements PipeTransform {
  transform(value: any, args: any): any {
    const resultadoPost = [];
    for (const post of value) {
      if (post.original_title.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultadoPost.push(post);
      }
    }
    return resultadoPost;
  }
}
