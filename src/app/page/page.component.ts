import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PageService } from '../page.service';
import { Page } from '../page.model';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [PageService, CharacterService]
})
export class PageComponent {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pageService: PageService,
    private characterService: CharacterService
  ) {}

  pageId : number;
  foundPage;
  foundCharacter : Character;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.pageId = parseInt(urlParameters['page_id']);
    });
    this.foundPage = this.pageService.getPageById(this.pageId)
    console.log(this.foundPage)
  }

}
