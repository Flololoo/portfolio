export function skill() {


    $('.js-skill-block').one('triggerVisible', () => {
        let $skills = $('.js-skill');
        $skills.each( (index) => {
            let $element = $($skills[index]),
                val = $element.data('skill'),
                $circle = $element.find('.bar');

            if (isNaN(val)) {
                val = 100;
            }
            else{
                let r = $circle.attr('r');
                let c = Math.PI*(r*2);

                if (val < 0) { val = 0;}
                if (val > 100) { val = 100;}

                let pct = ((100-val)/100)*c;

                $circle.css({ strokeDashoffset: pct});

                $element.find('.js-cont-val').html(`${val}%`);
            }
        });
    });
}