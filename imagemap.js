$(document).ready(function () {
    var image = $('img');
    var uniText = {
        entrance: "University Centre Peterborough represents the single most important development in providing Higher Education in Peterborough’s history. The University Centre offers a broad portfolio of courses covering a range of subject areas and we are rapidly developing specialisms in a number of key areas.</br></br> Our portfolio is constantly being revised and updated to take account of the emerging needs and aspirations of local, national and international markets.",
        students: "Students remain at the heart of all that we do and are integral to the decision making process.  We aim to ensure that the attributes of the UCP graduate result in personal and academic success. The University Centre Peterborough Graduate demonstrates: <ul><li>Resilience</li><li>Engagement in and promotion of continuous academic and professional development</li><li>A global perspective and cross–cultural sensitivity and awareness</li><li>Clarity of communication and purpose</li><li>Information and skill expertise</li><li>Intellectual autonomy and enquiry</li><li>Adaptability</li></ul>"
    };
    var studentText = {               
        clubs: "We offer a variety of clubs and societies at UCP. These include; Netball, Football, English Literature, Criminology, a Mature Student Society and Archaeology Society. As well as societies, events such as the UCP Social Night and Student Experience Awards Evening are annually run. Such events are organised for you to enjoy and celebrate your time here at UCP. All students are encouraged to participate in organising the social and academic events at the University alongside our Student Experience team. Students can also attend guest lectures, participate in trips and if you are studying archaeology secure funding for digs which may be in the UK or abroad.",
        careers: "The Careers Adviser is available to help students planning their next steps and subject lecturers will guide you when applying for employment or postgraduate study. Regular Employability Days ensure you hone your skills in interactive workshops and speak to potential employers.UCP has a dedicated jobs vacancy and volunteering notice board which is regularly updated with the latest employment opportunities."
    };
    var accomodationText = {               
        door: "The accommodation complex consists of 54 student bedrooms, set in a combination of two and five bedroom flats across four separate blocks. On the ground floor, two flats at University Court have been designed to suit students with particular needs.",
        room: "Each flat has a communal kitchen/lounge with sofas, making it a great space for relaxing with friends. They are fully equipped with a range of kitchen units and appliances including cooker, fridge, freezer and microwave. Laundry facilities are available which serve the entire complex.</br></br> Each of the bedrooms is fully equipped with an en-suite shower room, private study area, bed, storage and shelving."
    };

    var defaultDipTooltip = ' ';

    image.mapster(
    {
        fillOpacity: 0.4,
        fillColor: "000000",
        strokeColor: "3320FF",
        strokeOpacity: 0.8,
        strokeWidth: 4,
        stroke: true,
        isSelectable: true,
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name',
        onClick: function (e) {
            var newToolTip = defaultDipTooltip;
            $('#UniInfo').html(uniText[e.key]);
            $('#StudentLifeInfo').html(studentText[e.key]);
            $('#AccomodationInfo').html(accomodationText[e.key]);
        },
        showToolTip: true,
        toolTipClose: ["tooltip-click", "area-click"]
    });
    });