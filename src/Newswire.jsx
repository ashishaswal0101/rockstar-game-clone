import React from 'react'

function Newswire() {

    const newswireData = [
        {
            img: "Newwire/newwire-games(2).jpg",
            subtitle: "GTA Online",
            title: "GTA Online: Agents of Sabotage Now Available",
        },
        {
            img: "Newwire/newwire-games(3).jpg",
            subtitle: "GTA Online",
            title: "GTA Online: Agents of Sabotage Now Available",
        },
        {
            img: "Newwire/newwire-games(4).jpg",
            subtitle: "GTA Online",
            title: "GTA Online: Agents of Sabotage Now Available",
        },
        {
            img: "Newwire/newwire-games(5).jpg",
            subtitle: "GTA Online",
            title: "GTA Online: Agents of Sabotage Now Available",
        },
        {
            img: "Newwire/newwire-games(6).jpg",
            subtitle: "GTA Online",
            title: "GTA Online: Agents of Sabotage Now Available",
        },
        {
            img: "Newwire/newwire-games(1).jpg",
            subtitle: "GTA Online",
            title: "GTA Online: Agents of Sabotage Now Available",
        },
    ];

    return (
        <div className="newswire-container w-full h-auto bg-black text-white">
            <div className="newswire grid grid-rows-6 grid-cols-1 p-10 sm:grid-rows-3 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-10 sm:p-20">
                {newswireData.map((item, index) => (
                    <div key={index} className="games-card flex flex-col border-white border w-full sm:w-auto rounded-[0.5rem]">
                        <img src={item.img} alt={item.subtitle} />
                        <div className="gta-online p-6">
                            <div>
                                <span className="text-sm texj">{item.subtitle}</span>
                            </div>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Newswire

