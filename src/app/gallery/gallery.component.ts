import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cabin1 = [
    '../../assets/img/images/images01/cabin1/1.jpg',
    '../../assets/img/images/images01/cabin1/2.jpg',
    '../../assets/img/images/images01/cabin1/3.jpg',
    '../../assets/img/images/images01/cabin1/4.jpg',
    '../../assets/img/images/images01/cabin1/5.jpg',
    '../../assets/img/images/images01/cabin1/6.jpg',
    '../../assets/img/images/images01/cabin1/7.jpg',
  ];

  cabin2 = [
    '../../assets/img/images/images01/cabin2/1.jpg',
    '../../assets/img/images/images01/cabin2/2.jpg',
    '../../assets/img/images/images01/cabin2/3.jpg',
    '../../assets/img/images/images01/cabin2/4.jpg',
    '../../assets/img/images/images01/cabin2/5.jpg',
    '../../assets/img/images/images01/cabin2/6.jpg'
  ];

  cabin3 = [
    '../../assets/img/images/images01/cabin3/1.jpg',
    '../../assets/img/images/images01/cabin3/2.jpg',
    '../../assets/img/images/images01/cabin3/3.jpg',
    '../../assets/img/images/images01/cabin3/4.jpg',
    '../../assets/img/images/images01/cabin3/5.jpg',
    '../../assets/img/images/images01/cabin3/6.jpg',
    '../../assets/img/images/images01/cabin3/7.jpg'
  ];

  cabin4 = [
    '../../assets/img/images/images01/cabin4/1.jpg',
    '../../assets/img/images/images01/cabin4/2.jpg',
    '../../assets/img/images/images01/cabin4/3.jpg',
    '../../assets/img/images/images01/cabin4/4.jpg',
    '../../assets/img/images/images01/cabin4/5.jpg',
    '../../assets/img/images/images01/cabin4/6.jpg',
    '../../assets/img/images/images01/cabin4/7.jpg',
    '../../assets/img/images/images01/cabin4/8.jpg'
  ];

  cabin5 = [
    '../../assets/img/images/images01/cabin5/2.jpg',
    '../../assets/img/images/images01/cabin5/3.jpg',
    '../../assets/img/images/images01/cabin5/4.jpg',
    '../../assets/img/images/images01/cabin5/5.jpg',
    '../../assets/img/images/images01/cabin5/6.jpg',
    '../../assets/img/images/images01/cabin5/7.jpg',
    '../../assets/img/images/images01/cabin5/8.jpg',
    '../../assets/img/images/images01/cabin5/9.jpg'
  ];

  poolarea = [
    '../../assets/img/images/images01/poolarea/1.jpg',
    '../../assets/img/images/images01/poolarea/2.jpg',
    '../../assets/img/images/images01/poolarea/3.jpg',
    '../../assets/img/images/images01/poolarea/4.jpg',
    '../../assets/img/images/images01/poolarea/5.jpg',
    '../../assets/img/images/images01/poolarea/6.jpg',
    '../../assets/img/images/images01/poolarea/7.jpg',
    '../../assets/img/images/images01/poolarea/8.jpg',
    '../../assets/img/images/images01/poolarea/9.jpg',
  ];

  general = [
    '../../assets/img/images/images01/general/1.jpg',
    '../../assets/img/images/images01/general/2.jpg',
    '../../assets/img/images/images01/general/3.jpg',
    '../../assets/img/images/images01/general/4.jpg',
    '../../assets/img/images/fb_images/1.jpg',
    '../../assets/img/images/fb_images/2.jpg',
    '../../assets/img/images/fb_images/3.jpg',
    '../../assets/img/images/fb_images/4.jpg',
    '../../assets/img/images/fb_images/5.jpg',
    '../../assets/img/images/fb_images/6.jpg',
    '../../assets/img/images/fb_images/7.jpg',
    '../../assets/img/images/fb_images/8.jpg',
    '../../assets/img/images/fb_images/9.jpg',
    '../../assets/img/images/fb_images/10.jpg',
    '../../assets/img/images/fb_images/11.jpg',
    '../../assets/img/images/fb_images/12.jpg',
    '../../assets/img/images/fb_images/13.jpg',
    '../../assets/img/images/fb_images/14.jpg',
    '../../assets/img/images/fb_images/15.jpg',
    '../../assets/img/images/fb_images/16.jpg',
    '../../assets/img/images/fb_images/17.jpg',
    '../../assets/img/images/fb_images/18.jpg',
  ];


  constructor() { }

  ngOnInit() {
      $(function() {
        let selectedClass = '';
        $('.filter').click(function() {
            selectedClass = $(this).attr('data-rel');
            $('#gallery').fadeTo(100, 0.1);
            $('#gallery div').not('.' + selectedClass).fadeOut().removeClass('animation');
            setTimeout(function() {
                $('.' + selectedClass).fadeIn().addClass('animation');
                $('#gallery').fadeTo(300, 1);
            }, 300);
        });
    });
  }


}



