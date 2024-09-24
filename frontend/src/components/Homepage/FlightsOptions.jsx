import RadioLabel from "./RadioLabel";

function FlightsOptions() {
    return (
        <div className="mb-10 mt-20 dark:text-white lg:mb-0 lg:mt-0 lg:w-1/5">
            <div className="mb-4">
                <p className="mb-2 font-bold">Sort by:</p>
                <select
                    name=""
                    id=""
                    className="w-full border border-purple-900 p-2 outline-none dark:bg-gray-700"
                >
                    <option value="">Lowest Price</option>
                </select>
            </div>
            <div className="mb-4">
                <p className="mb-2 font-bold">Arrival Time</p>
                <label htmlFor="" className="mb-1 flex gap-3">
                    <input
                        type="radio"
                        name=""
                        id=""
                        className="accent-purple-900 focus:right-2 focus:ring-purple-900"
                    />
                    <span>5:00 AM - 11:59 AM</span>
                </label>
                <label htmlFor="" className="flex gap-3">
                    <input
                        type="radio"
                        name=""
                        id=""
                        className="accent-purple-900 focus:right-2 focus:ring-purple-900"
                    />
                    <span>12:00 PM - 5:59 PM</span>
                </label>
            </div>
            <div className="mb-4">
                <p className="mb-2 font-bold">Stops</p>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>Nonstop</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>1 Stop</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>2 Stop</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
            </div>
            <div>
                <p className="mb-2 font-bold">Airlines Included</p>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>Alitalia</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>Lufthansa</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>Air France</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>Brussels Airlines</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>Air Italy</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
                <RadioLabel>
                    <div>
                        <input
                            type="radio"
                            name=""
                            id=""
                            className="mr-3 accent-purple-900 focus:right-2 focus:ring-purple-900"
                        />
                        <span>Siberia</span>
                    </div>
                    <span>$230</span>
                </RadioLabel>
            </div>
        </div>
    );
}

export default FlightsOptions;
