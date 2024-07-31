"use client";
import type { Demo, Page } from "@/types";
import {
    AutoComplete,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Chips } from "primereact/chips";
import {
    ColorPicker,
    ColorPickerHSBType,
    ColorPickerRGBType,
} from "primereact/colorpicker";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Knob } from "primereact/knob";
import { ListBox } from "primereact/listbox";
import { MultiSelect } from "primereact/multiselect";
import { RadioButton } from "primereact/radiobutton";
import { Rating } from "primereact/rating";
import { SelectButton } from "primereact/selectbutton";
import { Slider } from "primereact/slider";
import { ToggleButton } from "primereact/togglebutton";
import { useEffect, useState } from "react";
import { CountryService } from "../../../../demo/service/CountryService";

interface InputValue {
    name: string;
    code: string;
}

const InputDemo: Page = () => {
    const [floatValue, setFloatValue] = useState("");
    const [autoValue, setAutoValue] = useState<Demo.Country[]>([]);
    const [selectedAutoValue, setSelectedAutoValue] = useState(null);
    const [autoFilteredValue, setAutoFilteredValue] = useState<Demo.Country[]>(
        []
    );
    const [calendarValue, setCalendarValue] = useState<any>(null);
    const [inputNumberValue, setInputNumberValue] = useState<number | null>(
        null
    );
    const [chipsValue, setChipsValue] = useState<any[]>([]);
    const [sliderValue, setSliderValue] = useState<number | string>("");
    const [ratingValue, setRatingValue] = useState<number | null>(null);
    const [colorValue, setColorValue] = useState<
        string | ColorPickerRGBType | ColorPickerHSBType
    >("1976D2");
    const [knobValue, setKnobValue] = useState(20);
    const [radioValue, setRadioValue] = useState(null);
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [switchValue, setSwitchValue] = useState(false);
    const [listboxValue, setListboxValue] = useState(null);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [multiselectValue, setMultiselectValue] = useState(null);
    const [toggleValue, setToggleValue] = useState(false);
    const [selectButtonValue1, setSelectButtonValue1] = useState(null);
    const [selectButtonValue2, setSelectButtonValue2] = useState(null);
    const [inputGroupValue, setInputGroupValue] = useState(false);

    const listboxValues: InputValue[] = [
        { name: "Lamhamid", code: "NY" },
        { name: "Massira", code: "RM" },
        { name: "Daoudiat", code: "LDN" },
        { name: "Gueliz", code: "IST" },
        { name: "Medina", code: "PRS" },
    ];

    const dropdownValues: InputValue[] = [
        { name: "Lamhamid", code: "NY" },
        { name: "Massira", code: "RM" },
        { name: "Gueliz", code: "LDN" },
        { name: "Daoudiat", code: "IST" },
        { name: "Medina", code: "PRS" },
    ];

    const multiselectValues: InputValue[] = [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
    ];

    const selectButtonValues1: InputValue[] = [
        { name: "Option 1", code: "O1" },
        { name: "Option 2", code: "O2" },
        { name: "Option 3", code: "O3" },
    ];

    const selectButtonValues2: InputValue[] = [
        { name: "Option 1", code: "O1" },
        { name: "Option 2", code: "O2" },
        { name: "Option 3", code: "O3" },
    ];

    useEffect(() => {
        CountryService.getCountries().then((data) => setAutoValue(data));
    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setAutoFilteredValue([...autoValue]);
            } else {
                setAutoFilteredValue(
                    autoValue.filter((country) => {
                        return country.name
                            .toLowerCase()
                            .startsWith(event.query.toLowerCase());
                    })
                );
            }
        }, 250);
    };

    const onCheckboxChange = (e: CheckboxChangeEvent) => {
        let selectedValue = [...checkboxValue];
        if (e.checked) selectedValue.push(e.value);
        else selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };

    const itemTemplate = (option: InputValue) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={option.name}
                    src={`/demo/images/flag/flag_placeholder.png`}
                    onError={(e) =>
                        (e.currentTarget.src =
                            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                    }
                    className={`flag flag-${option.code.toLowerCase()}`}
                    style={{ width: "21px" }}
                />
                <span className="ml-2">{option.name}</span>
            </div>
        );
    };

    return (
        <div className="grid p-fluid input-demo">
            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Nom</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText
                                type="text"
                                placeholder="Default"
                            ></InputText>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText
                                type="text"
                                placeholder="Disabled"
                                disabled
                            ></InputText>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText
                                type="text"
                                placeholder="Invalid"
                                className="p-invalid"
                            />
                        </div>
                    </div>

                    <h5>Prenom</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <span className="p-input-icon-left">
                                <i className="pi pi-user" />
                                <InputText type="text" placeholder="Username" />
                            </span>
                        </div>
                        
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <span className="p-input-icon-right">
                                <InputText type="text" placeholder="Search" />
                                <i className="pi pi-search" />
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <span className="p-input-icon-left p-input-icon-right">
                                <i className="pi pi-user" />
                                <InputText type="text" placeholder="Search" />
                                <i className="pi pi-search" />
                            </span>
                        </div>
                    </div>

                    <h5>Titre du projet</h5>
                    <span className="p-float-label">
                        <InputText
                            id="Projet"
                            type="text"
                            value={floatValue}
                            onChange={(e) => setFloatValue(e.target.value)}
                        />
                        <label htmlFor="username">Username</label>
                    </span>

                    <h5>Description du projet</h5>
                    <InputTextarea
                        placeholder="Description du projet"
                        rows={5}
                        cols={30}
                    />

                    <h5>AutoComplete</h5>
                    <AutoComplete
                        placeholder="Search"
                        id="dd"
                        dropdown
                        multiple
                        value={selectedAutoValue}
                        onChange={(e) => setSelectedAutoValue(e.value)}
                        suggestions={autoFilteredValue}
                        completeMethod={searchCountry}
                        field="name"
                    />

                    <h5>Date de naissance</h5>
                    <Calendar
                        showIcon
                        showButtonBar
                        value={calendarValue}
                        onChange={(e) => setCalendarValue(e.value ?? null)}
                    />

                    <h5>Nombre de projets</h5>
                    <InputNumber
                        value={inputNumberValue}
                        onValueChange={(e) =>
                            setInputNumberValue(e.value ?? null)
                        }
                        showButtons
                        mode="decimal"
                    ></InputNumber>

                    <h5>una autre champs</h5>
                    <Chips
                        value={chipsValue}
                        onChange={(e) => setChipsValue(e.value ?? [])}
                    />
                </div>

                
                <div className="card">
                    <h5>Quartier</h5>
                    <ListBox
                        value={listboxValue}
                        onChange={(e) => setListboxValue(e.value)}
                        options={listboxValues}
                        optionLabel="name"
                        filter
                    />

                    <h5>Quartier</h5>
                    <Dropdown
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.value)}
                        options={dropdownValues}
                        optionLabel="name"
                        placeholder="Select"
                    />

                    <h5>Quartier</h5>
                    <MultiSelect
                        value={multiselectValue}
                        onChange={(e) => setMultiselectValue(e.value)}
                        options={multiselectValues}
                        itemTemplate={itemTemplate}
                        optionLabel="name"
                        placeholder="Select Countries"
                        filter
                        className="multiselect-custom"
                        display="chip"
                    />
                </div>

                <div className="card">
                    <h5>Avez vous participez au paravant</h5>
                    <ToggleButton
                        checked={toggleValue}
                        onChange={(e) => setToggleValue(e.value)}
                        onLabel="Yes"
                        offLabel="No"
                    />

                    <h5>Options</h5>
                    <SelectButton
                        value={selectButtonValue1}
                        onChange={(e) => setSelectButtonValue1(e.value)}
                        options={selectButtonValues1}
                        optionLabel="name"
                    />

                    <h5>Options</h5>
                    <SelectButton
                        value={selectButtonValue2}
                        onChange={(e) => setSelectButtonValue2(e.value)}
                        options={selectButtonValues2}
                        optionLabel="name"
                        multiple
                    />
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Projet</h5>
                    <div className="grid p-fluid">
                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Projet" />
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-shopping-cart"></i>
                                </span>
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-globe"></i>
                                </span>
                                <InputText placeholder="Budget necessaire" />
                                <span className="p-inputgroup-addon">MAD</span>
                                <span className="p-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <Button label="Docuements" />
                                <InputText placeholder="Keyword" />
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon p-inputgroup-addon-checkbox">
                                    <Checkbox
                                        checked={inputGroupValue}
                                        onChange={(e) =>
                                            setInputGroupValue(
                                                e.checked ?? false
                                            )
                                        }
                                    />
                                </span>
                                <InputText placeholder="Confirmer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputDemo;
