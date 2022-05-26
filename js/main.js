(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


//   Translate

    // $(function() {
    //   $('.translate').click(function() {
    //     var lang = $(this).attr('id');
  
    //     $('.lang').each(function(index, item) {
    //       $(this).text(arrLang[lang][$(this).attr('key')]);
    //     });
    //   });
    // });


    document.addEventListener('DOMContentLoaded', getLocalLang)
 

    var arrLang = {
        'en': {
            // Navbar
          'home': 'Home',
          'about': 'About us',
          'services': 'Our services',
                'parts': 'New and used parts',
                'lubricants': 'All types of lubricants',
                'tires': 'New and used tires',
                'shopping': 'Japan shopping service',
                'logistics': 'Logistics',
                'consulting': 'Consulting services',
          'contact': 'Contact',
        //   Carousel
            'carousel': 'Place for your logistics solution',
        // About
            'aboutUs': 'NBM Japan LLC is a young company that was founded in 2022 and is headquartered in the port city of Osaka. Despite its recent opening, our staff comprises specialists with a decade of hands-on experience in this field in Japan. We are closely familiar with supply and logistics chains, the auction system and our main goal is to deliver the selected products to the customer as quickly as possible, while keeping prices affordable for everyone.',
            'enlist': 'Enlist the support of NBM Japan LLC experts and don’t worry about the shipping and customs clearance of your order, since we work:',
            'profess': 'Professionally',
            'staff': 'Our staff is competent and experienced with shipping orders of various types and sizes from Japan to practically every country',
            'resp': 'Responsibly',
            'work': 'We work on every order with care and attention, closely verifying the compliance of the goods with the sales inquiry and agreement, down to the smallest detail',
            'quick1': 'Quickly',
            'thanks':'Thanks to our experience, the orders are shipped out without any delays and promptly cleared at customs',
            'inexp':'Inexpensively',
            'loyal': 'A loyal pricing policy is one of our key priorities',
            'ordering': 'When ordering auto parts and other auto goods from NBM Japan LLC, you can be assured of their top-notch quality, excellent performance and effectiveness!',
            // Table
            'permit': 'Antique permit',
            'osaka': 'Osaka Chamber of Commerce and Industry',
            'lang1': 'Languages',
            'lang2':'Japan, english, russian',
            'detail': 'Company details',

            // Services
            'oil': 'Motor oils',
            'parts1': 'Auto parts',
            'tires1': 'Tires',
            'goods': 'Goods from auctions',
            'logi': 'Logistic',
            'cons': 'Consulting',
            'explore': 'Read More',
            // Footer
            'addr': 'Address',
            'air': 'Air freight',
            'sea': 'Sea freight',
            'road': 'Road freight',
            'log': 'Logistic solutions',
            'indust': 'Industry solutions',
            'quick': 'Quick links',
            // New parts
            'repair':'Car repair and the need to buy spare parts are inevitable, and every car owner has to face them sooner or later. This is where the question arises: What parts to buy? The choice is very wide: from new non-genuine parts at an average price to new original hi-end spare parts to used original parts purchased from a local car dealer. Our experts offer yet another option — that is, to order new or used spare parts made in Japan with the help of NBM Japan LLC services. These parts are produced under strict factory standards and have passed preliminary tests of strength and reliability. Another advantage is the low degree of wear and gentle operating conditions of Japanese vehicles. The price of the specific auto part and its shipping cost will probably be equal to or less than the total cost of buying an original part in our clients` countries - but with us you will get guaranteed quality.',
            // Lubricant
            'quality': 'The quality of motor oil directly affects car performance. The engine condition, the level of fuel consumption, and the amount of waste all depend on this vital lubricant. That is why the use of counterfeit oils or expired products can lead to a major breakdown. Japanese lubricants are in great demand in the market due to their high quality. They are often more expensive than their competitors produced in other countries, but the cost fully justifies itself by their high efficiency and excellent performance. Most often, customers are interested in the following brands:',
            "genuine": 'Genuine',
            "oem": 'OEM brand',
            "industrial": 'Industrial oils, Chemicals and others',
            'unfortunately': 'Unfortunately, these brands are not available in all countries, and it may be difficult to purchase their branded goods. However, our experts can easily solve this problem by delivering engine oils, hydraulic oils, OEM oils, and other lubricants to your location.',
            // Tires
            'among':'Japanese tires are among the most popular in the world. They boast multi-level quality control, are very high-tech and extremely well designed to the smallest detail. Our specialists will deliver new or used tires from the best manufacturers! These are only three of the numerous brands that we work with at NBM Japan LLC. If it’s available in Japan, we’ll get it for you!',
            'most': 'THE MOST POPULAR BRANDS ARE CURRENTLY:',
            'bridgestone': 'Bridgestone — perfect for driving under any weather conditions',
            'yokohama': 'Yokohama — specializes in off-road tires, among other things',
            'toyo': 'Toyo — popular among tuning studios because its main specialty is the production of tires for sports driving, as well as everyday tires with sports performance',
            // Shopping
            'aside':'Aside from auto lubricants, tires and auto parts, lots of Japanese products like cosmetics, clothing, footwear, childrens and home goods are also gaining a reputation throughout the world. The main advantages of these products are their natural components, hypoallergenic quality, and the renowned safety of use. Most of the goods are made using modern technologies, but incorporate centuries-old principles. There’s no need to take a time-consuming and costly trip to Japan on your own to find the products you need. If you require certain Japanese goods delivered, NBM Japan LLC is here to help you out through our Shopping Service! Our employees will be able to visit a variety of auctions and find the best product for each client.',
            // Logistic service
            'logist1':'Logistics service',
            'japan1':'Japan is among the world leaders in the production of high-tech products. Despite the country’s geographically remote location, the volume of cargo transportation to and from Japan is very impressive. A large share of Japan’s export structure is taken up by heavy engineering products, cars, electronics, cosmetics, and household chemicals.',
            'japan2': 'NBM Japan LLC offers its services in the sphere of shipping and customs clearance of goods. Our employees have considerable experience in organizing the optimal delivery of various goods from Japan to countries around the world.',
            'japan3': 'Details of our logistics services (exact delivery time, the cost of shipping a specific product, etc.) can be obtained from our representatives . Just fill out the contact form on our website.',
            "global1": 'Global coverage',
            "global2": 'Coordination of all import issues with the client and supplier',
            "global3": 'High shipping speed',
            "global4": 'Legal and accounting support of the client',
            "global5": 'Product safety guarantee',
             // Consulting
            "cons5": 'Consulting services',
            'cons1':'In addition to our main line of business, we offer consulting services to foreign businessmen seeking to open a company in Japan. We have recently opened our own company in Japan, and are very well familiar with the process of launching a business here. A foreign national can indeed set up their company in Japan, and the actual requirements are not that complicated (the key ones are an account in a Japanese bank, a startup capital and a registration address in the country), but there are a lot of intricate details, such as a different language, a distinctive business culture, and a marketplace with its own specifics.',
            'cons2':'We will tell you about the different types of Japanese business visas and advise on the right choice in your case, and suggest the region to open a business in, since some are more open to foreigners setting up a company. We’ll guide you through the complicated world of Japanese corporate banking and provide comprehensive translation and interpreting services. ',
            'please':'Please contact us, and we will be happy to help you launch your business in this stable and flourishing country!',
            // Contact
            'touch':'GET IN TOUCH',
            'query':'Contact For Any Query',


        },
        'ru': {
            // Navbar
            'home': 'Главная',
            'about': 'Почему мы?',
            'services': 'Наши услуги ',
                'parts': 'Новые и Б/У запчасти',
                'lubricants': 'Все виду смазочных материалов',
                'tires': 'Новые и Б/У шины',
                'shopping': 'Японский торговый сервис',
                'logistics': 'Логистика',
                'consulting': 'Консалтинг',
            'contact': 'Контакты',
        //   Carousel
            'carousel': 'Место для вашего логистического решения',
        // About
            'aboutUs': 'NBM Japan LLC — молодая компания, основанная в 2022 году, со штаб-квартирой в портовом городе Осака. Несмотря на недавнее открытие, наш штат состоит из специалистов с десятилетним практическим опытом работы в этой области в Японии. Мы хорошо знакомы с цепочками поставок и логистики, системой аукционов и наша главная цель – максимально быстро доставить выбранную продукцию до покупателя, сохраняя при этом доступные цены для всех.',
            'enlist': 'Заручитесь поддержкой специалистов NBM Japan LLC и не беспокойтесь о доставке и растаможке вашего заказа, ведь мы работаем:',
            'profess': 'Профессионально',
            'staff': 'Наши сотрудники компетентны и имеют опыт доставки заказов различных типов и размеров из Японии практически во все страны мира',
            'resp': 'Ответственно',
            'work': 'Мы работаем над каждым заказом с заботой и вниманием, тщательно проверяя соответствие товара заявке и договору до мельчайших деталей',
            'quick1': 'Быстро',
            'thanks':'Благодаря нашему опыту заказы отправляются без задержек и оперативно проходят таможенную очистку',
            'inexp':'Недорого',
            'loyal': 'Лояльная ценовая политика – один из наших ключевых приоритетов',
            'ordering': 'Заказывая автозапчасти и другие автотовары в компании NBM Japan LLC, вы можете быть уверены в их первоклассном качестве, отличных характеристиках и эффективности!',
        // Table
            'permit': 'Разрешение',
            'osaka': 'Осакская торгово-промышленная палата',
            'lang1': 'Языки',
            'lang2':'Япония, английский, русский',
            'detail': 'Сведения о компании',


        // Services
            'oil': 'Японские моторные и трансмиссионные масла',   
            'parts1': 'Автозапчасти для любых марок автомобилей',
            'tires1': 'Шины',
            'goods': 'Различные товары с японских аукционов',
            'logi': 'Логистические  услуги',
            'cons': 'Консалтинговые услуги',
            'explore': 'Подробнее',

        // Footer
            'addr': 'Адрес',
            'air': 'Авиаперевозка',
            'sea': 'Морские перевозки',
            'road': 'Автомобильный грузовой транспорт',
            'log': 'Логистические решения',
            'indust': 'Отраслевые решения',
            'quick': 'Быстрые ссылки',
         // New parts
            'repair':'Ремонт автомобиля и необходимость покупки запчастей неизбежны, и с ними рано или поздно приходится сталкиваться каждому автовладельцу. Вот тут и возникает вопрос: какие запчасти покупать? Выбор очень широк: от новых неоригинальных запчастей по средней цене, до новых оригинальных запчастей высокого класса, до б/у оригинальных запчастей, купленных у местного автодилера. Наши специалисты предлагают еще один вариант — заказать новые или б/у запчасти производства Японии с помощью услуг ООО «НБМ Япония».Эти детали производятся по строгим заводским стандартам и прошли предварительные испытания на прочность и надежность. Еще одним преимуществом является низкая степень износа и щадящие условия эксплуатации японских автомобилей. Цена конкретной автозапчасти и стоимость ее доставки, вероятно, будет равна или меньше общей стоимости покупки оригинальной детали в странах наших клиентов, но с нами вы получите гарантированное качество. Мы рады как оптовым заказам любых объемов, так и розничным клиентам, покупающим запчасти для личного авто. Мы поможем подобрать нужную деталь по оптимальной цене. Свяжитесь с нами!',
        // Lubricant
        'quality': 'Качество моторного масла напрямую влияет на работу автомобиля. От этого жизненно важного смазочного материала зависит состояние двигателя, уровень расхода топлива и количество отходов. Именно поэтому использование контрафактных масел или продуктов с истекшим сроком годности может привести к крупной поломке. Японские смазочные материалы пользуются большим спросом на рынке благодаря высокому качеству. Они зачастую дороже своих конкурентов, произведенных в других странах, но стоимость полностью оправдывает себя высокой эффективностью и отличными эксплуатационными характеристиками. Чаще всего покупатели интересуются следующими брендами:',
        "genuine": 'Подлинный',
        "oem": 'ОЕМ бренд',
        "industrial": 'Индустриальные масла, химия и другие',
        'unfortunately':'К сожалению, эти бренды доступны не во всех странах, и приобрести их брендовые товары могут быть трудности. Однако наши специалисты могут легко решить эту проблему, доставив моторные масла, гидравлические масла, OEM-масла и другие смазочные материалы к вам.',
        // Tires
        'among':'Японские шины являются одними из самых популярных в мире. Они могут похвастаться многоуровневым контролем качества, очень высокотехнологичны и чрезвычайно продуманы до мельчайших деталей. Наши специалисты доставят новые или б/у шины от лучших производителей! Это только три из многочисленных брендов, с которыми мы работаем в NBM Japan LLC. Если он доступен в Японии, мы доставим его для вас!',
        'most': 'САМЫЕ ПОПУЛЯРНЫЕ БРЕНДЫ В НАСТОЯЩЕЕ ВРЕМЯ:',
        'bridgestone': 'Bridgestone — идеально подходит для вождения в любых погодных условиях',
        'yokohama': 'Yokohama — среди прочего специализируется на внедорожных шинах.',
        'toyo': 'Toyo — популярен среди тюнинг-ателье, поскольку его основная специализация — производство шин для спортивной езды, а также повседневных шин со спортивными характеристиками.',
        // Shopping
        'aside':'Помимо автомобильных смазок, шин и автозапчастей, многие японские товары, такие как косметика, одежда, обувь, товары для детей и дома, также завоевывают репутацию во всем мире. Основными преимуществами этих продуктов являются натуральные компоненты, гипоаллергенное качество и общепризнанная безопасность использования. Большая часть товаров производится с использованием современных технологий, но с учетом многовековых принципов. Нет необходимости самостоятельно совершать длительную и дорогостоящую поездку в Японию, чтобы найти нужные продукты. Если вам нужна доставка определенных японских товаров, NBM Japan LLC поможет вам через нашу службу покупок! Наши сотрудники смогут посетить различные аукционы и найти лучший товар для каждого клиента.',
        // Logistic service
        'logist1':'Логистические услуги',
        'japan1':'Япония входит в число мировых лидеров по производству высокотехнологичной продукции. Несмотря на географическую удаленность страны, объемы грузоперевозок в Японию и из Японии весьма внушительны. Большую долю в структуре экспорта Японии занимают продукция тяжелого машиностроения, автомобили, электроника, косметика, бытовая химия.',
        'japan2': 'ООО «НБМ Япония» предлагает свои услуги в сфере доставки и таможенного оформления грузов. Наши сотрудники имеют значительный опыт в организации оптимальной доставки различных грузов из Японии в страны мира.',
        'japan3': 'Подробности о наших логистических услугах (точные сроки доставки, стоимость доставки конкретного товара и т.д.) можно узнать у наших представителей. Просто заполните контактную форму на нашем сайте.',
        "global1": 'Преимущества нашей службы логистики:',
        "global2": 'Согласование всех вопросов импорта с клиентом и поставщиком',
        "global3": 'Высокая скорость доставки',
        "global4": 'Юридическое и бухгалтерское сопровождение клиента',
        "global5": 'Гарантия безопасности продукции',
        // Consulting
        "cons5": 'Консалтинговые услуги',
        'cons1':'В дополнение к нашему основному направлению деятельности мы предлагаем консультационные услуги иностранным бизнесменам, желающим открыть компанию в Японии. Недавно мы открыли собственную компанию в Японии и очень хорошо знакомы с процессом запуска здесь бизнеса. Иностранный гражданин действительно может открыть свою компанию в Японии, и на самом деле требования не так уж сложны (основные — это счет в японском банке, стартовый капитал и адрес регистрации в стране), но очень много сложные детали, такие как другой язык, особая бизнес-культура и рынок со своей спецификой.',
        'cons2': 'Мы расскажем вам о различных типах японских бизнес-виз и посоветуем правильный выбор в вашем случае, а также порекомендуем регион для открытия бизнеса, так как некоторые из них более открыты для иностранцев, создающих компанию. Мы проведем вас через сложный мир японского корпоративного банкинга и предоставим комплексные услуги письменного и устного перевода.',
        'please': 'Свяжитесь с нами, и мы будем рады помочь вам начать свой бизнес в этой стабильной и процветающей стране!',
         // Contact
         'touch':'СВЯЗАТЬСЯ',
         'query':'Контакт для любого запроса',

        }
      }


      $(function(){
        $('.translate').click(function() {
            var lang = $(this).attr('id')
            saveLocalLang(lang)
    
            $('.lang').each(function(index, item){
                $(this).text(arrLang[lang][$(this).attr('key')])
            });
        });
    });
    
    
    // local storage
    
    function saveLocalLang(language){
        let langs
        if(localStorage.getItem('langs')===null){
            langs=[]
        }else{
            langs =JSON.parse(localStorage.getItem('langs'))
        }
        langs.push(language)
        localStorage.setItem('langs', JSON.stringify(langs))
     }

    function getLocalLang(){
        let langs
        if(localStorage.getItem('langs')===null){
            langs=[]
        }else{
            langs =JSON.parse(localStorage.getItem('langs'))
        }
        langs.forEach(function(language){
            let lang = langs[langs.length - 1]
                setTimeout(()=>{
                    $('.lang').each(function(index,item){
                        $(this).text(arrLang[lang][$(this).attr('key')])
                    });
                },0)
            })
            
        }

     
      
