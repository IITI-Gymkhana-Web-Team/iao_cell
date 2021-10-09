import {
	tawa_reservoir,
	pachmarhi,
	parsili,
	pench,
	panna,
	white_tiger,
	kanha,
	Jatashankar,
	chauragh,
	buffer_zone,
	boat_club,
	Bandhavgarh,
    rajwada,
    omkareshwar_temple,
    gandhihall,
    mandav,
    pataalpani,
    Mahakaleshwar
} from "../../../assets";

export const data = [
    {
        title: "Bandhavgarh National Park, Bandhavgarh",
        description: "Dominated by an amazing tiger count, Bandhavgarh National Park allows you to enjoy amazing tiger sightings. During the safari, you come across other beautiful species too.",
        img: Bandhavgarh,
        location: "https://www.google.co.in/maps/place/Bandhavgarh+National+Park/@23.6995707,80.9567616,13z/data=!4m8!1m2!2m1!1sBandhavgarh+National+Park,+Bandhavgarh!3m4!1s0x3986b169fc638b23:0xeb253da82fafb9b1!8m2!3d23.6989158!4d80.9768782",
        eta: {
            car: "12 hr",
            bicycle: "13 hr"
        }
    },
    {
        title: "Rajwada",
        description: "Rajwada is a historial palace in Khajuri Bazzar.It is also known as Holkar Palace, it was built by the Holkars of the Maratha Empire about two centuries ago. The palace was constructed by Malhar Rao Holkar, the founder of Holkar Dynasty in 1747.",
        img: rajwada,
        location: "https://www.google.co.in/maps/place/Rajwada+Palace/@22.7184562,75.852528,17z/data=!3m1!4b1!4m5!3m4!1s0x3962fd0a3c2422a1:0xb8cf3a1b62708158!8m2!3d22.7184562!4d75.8547167",
        eta: {
            car: "1 hr",
            bicycle: "1 hr"
        }
    },
    {
        title: "Gandhi Hall",
        description: "Located at 26 km from IIT Indore, it was built in 1904 as King Edward Hall and inaugurated by the Prince of Wales in 1905, this structure was renamed as Mahatma Gandhi Hall in 1948 after independence. Locally, it is known as the 'Ghants Ghar",
        img: gandhihall,
        location: "https://www.google.co.in/maps/place/Gandhi+Hall/@22.7202778,75.8647557,17z/data=!3m1!4b1!4m5!3m4!1s0x3962fd1246ae310b:0x2bf544615bbb4407!8m2!3d22.7202778!4d75.8669444",
        eta: {
            car: "1 hr",
            bicycle: "1 hr"
        }
    },
    {
        title: "Omkareshwar Temple",
        description: "Located at 56 km from IIT Indore, Omkareshwar is a town in Khandwa district, south of Indore, known for housing one of the 12 revered Jyotirlings Shriness of Shiva. The shine is located on an island called mandhata in the Narmada River. It is said that the shape of the island is like the symbol aum.",
        img: omkareshwar_temple,
        location: "https://www.google.com/maps/place/Mamleshwar+Temple+Omkareshwar+Mahadev+Temple/@22.2422036,76.1484064,17z/data=!3m1!4b1!4m5!3m4!1s0x3962bceeab2fda61:0x8c94ed811600a274!8m2!3d22.2422036!4d76.1505951",
        eta: {
            car: "2 hr",
            bicycle: "2 hr"
        }
    },
    {
        title: "Mandav (Jahaz Mahal)",
        description: "Mandu is an ancient fort city in the central Indian state of Madhya Pradesh. It's surrounded by stone walls dotted with darwazas(gateways). It's also known for its Afghan architectural heritage.",
        img: mandav,
        location: "https://www.google.com/maps/place/Mandav,+Madhya+Pradesh/@22.3347776,75.3707592,13z/data=!3m1!4b1!4m5!3m4!1s0x396241df36b705c1:0xb18ad666203d2d29!8m2!3d22.3271369!4d75.4053367",
        eta: {
            car: "2 hr",
            bicycle: "2 hr"
        }
    },
    {
        title: "Pataalpani",
        description: "Located at a distance of 20 kms from IIT Indore, it is an iconic waterfall in Mhow tehsil near Indore, with a water height of 300 feet. The area around the waterfall is considered to be a popular and interesting picnic and trekking spot.",
        img: pataalpani,
        location: "https://www.google.com/maps/place/Patalpani+Waterfall/@22.5038887,75.7899623,15z/data=!3m1!4b1!4m5!3m4!1s0x3962f6d6dce8f7ed:0x8ac425f0eed8430c!8m2!3d22.5038893!4d75.7987171",
        eta: {
            car: "1 hr",
            bicycle: "1 hr"
        }
    },
    {
        title: "Mahakaleshwar Temple",
        description: "Located in Ujjain, at a distance of 86 kms from IIT Indore, the Mahakaleshwar Temple houses another Jyotirlinge of Lord Shiva. The temple is situated to the side of holy river Shipra. One of the 12 Jyotirlingas in India, the lingam at the Mahakala is believed to be swayambhu(born of itself).",
        img: Mahakaleshwar,
        location: "https://www.google.com/maps/place/Mahakaleshwar+temple+Ujjain/@23.1828267,75.7660653,17z/data=!3m1!4b1!4m5!3m4!1s0x3963745b98301435:0x3e12190241b9baa5!8m2!3d23.1828267!4d75.768254",
        eta: {
            car: "1 hr",
            bicycle: "1 hr"
        }
    },
    {
        title: "Boat Club, Bhopal",
        description: "The boat club in Bhopal at the upper lake is known for boat and bird watching experiences. Early morning walks at the site are the best to enjoy the weather and beauty.",
        img: boat_club,
        location: "https://www.google.com/maps/place/Boat+Club,+Bhopal/@23.2513971,77.3880657,15z/data=!4m8!1m2!2m1!1sBoat+Club,+Bhopal!3m4!1s0x397c6825f9c9853b:0x4ccf6489a119f3be!8m2!3d23.2600168!4d77.4125299",
        eta: {
            car: "4 hr",
            bicycle: "5 hr"
        }
    },
    {
        title: "Buffer Zone, Pench",
        description: "Buffer areas are excellent for bird watching. When the core zones shut during monsoon, tourists can explore the buffer zone and take a tour close to nature.",
        img: buffer_zone,
        location: "https://www.google.com/maps/place/Pench+National+Park/@21.7495642,79.3265351,15z/data=!3m1!4b1!4m5!3m4!1s0x3a2ab6a391ebc691:0xf9f9c71463022df!8m2!3d21.7495644!4d79.3352899",
        eta: {
            car: "9 hr",
            bicycle: "11 hr"
        }
    },
    {
        title: "Chauragrh Temple, Pachmarhi",
        description: "Located on a hill in Pachmarhi, Chauragarh Temple is dedicated to Lord Shiva. It’s a popular tourist attraction in the town.",
        img: chauragh,
        location: "https://www.google.com/maps/place/Bada+Mahadev/@22.4496144,78.393557,13z/data=!4m8!1m2!2m1!1sChauragrh+Temple,+Pachmarhi!3m4!1s0x397e3b20ff3925dd:0x72e9a5e66573aa20!8m2!3d22.4674463!4d78.4345854",
        eta: {
            car: "8 hr",
            bicycle: "9 hr"
        }
    },
    {
        title: "Jatashankar Pachmarhi",
        description: "Jatashankar caves in Pachmarhi are popularly believed to be the place where Lord Shiva concealed himself from the wrath of Bhasmasur.",
        img: Jatashankar,
        location: "https://www.google.com/maps/place/Jatashankar+Temple/@22.4819232,78.4308587,15z/data=!3m1!4b1!4m5!3m4!1s0x397e3a2c5d95dfc9:0x71da8bfe0e4b77b6!8m2!3d22.4819234!4d78.4396135",
        eta: {
            car: "8 hr",
            bicycle: "9 hr"
        }
    },
    {
        title: "Kanha National Park, Kanha",
        description: "Kanha National Park is a Tiger Reserve where you can even spot other beautiful species of animals roaming freely in their natural habitat.",
        img: kanha,
        location: "https://www.google.com/maps/place/Kanha,+Madhya+Pradesh+481111/@22.282862,80.6140601,16z/data=!3m1!4b1!4m5!3m4!1s0x3a2a08968d83563d:0xfb41d7019de9dd66!8m2!3d22.2815606!4d80.6181218",
        eta: {
            car: "13 hr",
            bicycle: "14 hr"
        }
    },
    {
        title: "Mukundpur Zoo, Rewa",
        description: "The tourists here are keen to take up a white tiger safari. It is a thrilling safari in the lush green oasis of Mukundpur zoo.",
        img: white_tiger,
        location: "https://www.google.com/maps/place/White+Tiger+Safari+%26+Zoo,+Mukundpur,+satna+Madhya+Pradesh/@24.4250153,81.2414029,16z/data=!4m8!1m2!2m1!1sMukundpur+Zoo,+Rewa!3m4!1s0x39844363a177f035:0x415983b0f8ab0fc3!8m2!3d24.4281835!4d81.2479379",
        eta: {
            car: "12 hr",
            bicycle: "13 hr"
        }
    },
    {
        title: "Panna National Park, Panna",
        description: "The forests of Madhya Pradesh offer a wide spectrum of enthralling wildlife. Spot the fierce leopards and other beautiful members of the animal kingdom in the terrains of Panna National Park.",
        img: panna,
        location: "https://www.google.com/maps/place/Panna+National+Park/@24.6734881,79.7796234,10z/data=!4m8!1m2!2m1!1sPanna+National+Park,+Panna!3m4!1s0x3982f8521c25f015:0x9e2d81333c4008c6!8m2!3d24.5904659!4d79.9416518",
        eta: {
            car: "11 hr",
            bicycle: "12 hr"
        }
    },
    {
        title: "Pench National Park, Pench",
        description: "Pench National Park is the setting of Rudyard Kipling’s popular ‘The Jungle Book’. It’s popular for natural heritage and rich wildlife.",
        img: pench,
        location: "https://www.google.com/maps/place/Pench+National+Park/@21.6634583,78.9444476,10z/data=!3m1!4b1!4m5!3m4!1s0x3bd531813bfc958b:0xea7eb748bbe32925!8m2!3d21.6495224!4d79.2451149",
        eta: {
            car: "9 hr",
            bicycle: "10 hr"
        }
    },
    {
        title: "Sanjay-Dubri National Park, Parsili",
        description: "A wildlife paradise located in Sidhi district of Madhya Pradesh.",
        img: parsili,
        location: "https://www.google.com/maps/place/Parsili+Resort/@24.1633615,81.492561,15z/data=!3m1!4b1!4m8!3m7!1s0x3984333971d3d5c3:0x351f7cf0589b002d!5m2!4m1!1i2!8m2!3d24.1633617!4d81.5013158",
        eta: {
            car: "15 hr",
            bicycle: "17 hr"
        }
    },
    {
        title: "Satpura National Park, Pachmarhi",
        description: "A paradise for bird watchers and nature lovers, Satpura National Park has a wide array of wildlife experiences waiting to unfold. The Indian giant squirrel is the main attraction of the park.",
        img: pachmarhi,
        location: "https://www.google.com/maps/place/Pachmarhi,+Madhya+Pradesh+461881/@22.466596,78.3934586,13z/data=!3m1!4b1!4m5!3m4!1s0x397e3a348b5f3e9d:0xf4322966c8376db6!8m2!3d22.4674463!4d78.4345854",
        eta: {
            car: "8 hr",
            bicycle: "10 hr"
        }
    },
    {
        title: "Tawa Reservoir, Tawa",
        description: "Dotted with little islands and outlined with the Satpura hills, Tawa’s beauty is accentuated during the monsoons, as everything you see is fresh, soothing, clean and green.",
        img: tawa_reservoir,
        location: "https://www.google.com/maps/place/Tawa+Reservoir/@22.5427019,77.7471559,10z/data=!3m1!4b1!4m5!3m4!1s0x397e72d0674721cd:0x56655f8ebcb0b36f!8m2!3d22.541092!4d77.9681544",
        eta: {
            car: "7 hr",
            bicycle: "7 hr"
        }
    },
]

