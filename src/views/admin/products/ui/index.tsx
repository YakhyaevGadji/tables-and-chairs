"use client"
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/button";
import { Plus, Sparkles, Star } from "lucide-react";
import Image from 'next/image'
import { Badge } from "@/shared/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";
import instance from "@/shared/api/instance";
import { TypeChair, TypeChairAttributes, TypeChairOption, TypeChairType } from "@/entities/admin/model/types-form";
import { Checkbox } from "@/shared/ui/checkbox";

type TypeFileImage = {
    file: File;
    previewUrl: string;
}

type TypeChairCreate = {
    title: string;
    description: string;
    price: string;
    hit: boolean;
    type: TypeChairType;
    tags: TypeChairOption[];
    attributes: TypeChairAttributes;
    images: File[];
}

const tags = [
    {
        value: 'new',
        label: 'Новинка'
    },
    {
        value: 'sale',
        label: 'Акция'
    },
]

const requestCreateProduct = async (data: TypeChairCreate) => {
    try {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);

        data.images.forEach(file => {
            formData.append("images", file);
        });

        const result = await instance.post(
            "/chairs/create",
            formData,
        );

        return result.data;
    }catch (err) {
        console.log(err)
    }
};

const getChairs = async () => {
    try {
        const { data } = await instance.get<TypeChair[]>('/chairs');

        return data;
    }catch (err) {
        console.log(err)
    }
}


//TODO refactor: распределить по компонентам этот компонент
export const ProductsPageAdmin = () => {
    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
    const [images, setImages] = useState<TypeFileImage[]>([]);
    const [chairs, setChairs] = useState<TypeChair[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<TypeChairCreate>({
        defaultValues: {
            tags: [],
            hit: false
        }
    });
    const selectedTags = watch("tags")


    const handleImage = (file: File) => {
        const newImage: TypeFileImage = {
            file,
            previewUrl: URL.createObjectURL(file),
        };

        setImages(prev => {
            const updated = [...prev, newImage];

            setValue(
                "images",
                updated.map(img => img.file),
                { shouldValidate: true }
            );

            return updated;
        });
    };


    const onSubmit: SubmitHandler<TypeChairCreate> = async (data) => {
        // const res = await requestCreateProduct(data);
        console.log(data);
    }

    const handleGetChairs = async () => {
        const data = await getChairs();

        if(data) {
            setChairs(data);
        }
    }

    useEffect(() => {
        handleGetChairs()
    }, []);


    console.log(chairs, '[[[');

    return (
        <div>
            <div className="flex mb-7 items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Управление товарами</h2>
                    <p>Всего товаров: 3</p>
                </div>
                <Button onClick={() => setIsActiveModal(true)} className="py-7 w-[203px]">
                    <Plus />
                    Добавить товар
                </Button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <div className="relative">
                        <Image
                            src="https://placehold.co/330x190"
                            width={330}
                            height={190}
                            alt="iamge"
                        />
                        <Badge className="bg-orange-500 absolute top-3 right-3 uppercase">
                            <Star height={15} width={15} />
                            Хит
                        </Badge>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between mb-3">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className="text-[13px] px-2">Редактировать</Button>
                            <Button className="text-[13px] px-2">Удалить</Button>
                        </div>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <div className="relative">
                        <Image
                            src="https://placehold.co/330x190"
                            width={330}
                            height={190}
                            alt="iamge"
                        />
                        <Badge className="bg-green-600 absolute top-3 right-3 uppercase">
                            <Sparkles height={15} width={15}/>
                            НОВОЕ
                        </Badge>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between mb-3">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className="text-[13px] px-2">Редактировать</Button>
                            <Button className="text-[13px] px-2">Удалить</Button>
                        </div>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <div className="relative">
                        <Image
                            src="https://placehold.co/330x190"
                            width={330}
                            height={190}
                            alt="iamge"
                        />
                        <Badge className="bg-orange-500 absolute top-3 right-3 uppercase">
                            <Star height={15} width={15} />
                            Хит
                        </Badge>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between mb-3">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className="text-[13px] px-2">Редактировать</Button>
                            <Button className="text-[13px] px-2">Удалить</Button>
                        </div>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <div className="relative">
                        <Image
                            src="https://placehold.co/330x190"
                            width={330}
                            height={190}
                            alt="iamge"
                        />
                        <Badge className="bg-orange-500 absolute top-3 right-3 uppercase">
                            <Star height={15} width={15} />
                            Хит
                        </Badge>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between mb-3">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className="text-[13px] px-2">Редактировать</Button>
                            <Button className="text-[13px] px-2">Удалить</Button>
                        </div>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <div className="relative">
                        <Image
                            src="https://placehold.co/330x190"
                            width={330}
                            height={190}
                            alt="iamge"
                        />
                        <Badge className="bg-orange-500 absolute top-3 right-3 uppercase">
                            <Star height={15} width={15} />
                            Хит
                        </Badge>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between mb-3">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className="text-[13px] px-2">Редактировать</Button>
                            <Button className="text-[13px] px-2">Удалить</Button>
                        </div>
                    </div>
                </li>
            </ul>

            <Dialog open={isActiveModal} onOpenChange={(type) => setIsActiveModal(type)}>
                <DialogTitle/>
                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Label className="block mb-3">
                            <p className="mb-2">Название товара</p>
                            <Input
                                {...register("title")}
                                className="bg-[#EEF3F4] focus:border-red-600 focus-visible:ring-0"
                                placeholder="Введите название товара"
                            />
                        </Label>

                        <div className="flex gap-8 mb-3">
                            <Label className="w-full block">
                                <p className="mb-2">Цена</p>
                                <Input
                                    {...register("price")}
                                    type="number"
                                    className="bg-[#EEF3F4] focus:border-red-600 focus-visible:ring-0"
                                />
                            </Label>
                        </div>

                        <Label className="block mb-3">
                            <p className="mb-2">Теги</p>
                            <div className="flex flex-col gap-2">
                                {tags.map((tag: TypeChairOption) => {
                                    const isChecked = selectedTags?.some((t) => t.value === tag.value);

                                    return (
                                        <div key={tag.value} className="flex gap-2 items-center">
                                            <Checkbox
                                                id={tag.value}
                                                checked={isChecked}
                                                onCheckedChange={(checked) => {
                                                    if (checked) {
                                                        setValue("tags", [...selectedTags, tag]);
                                                    } else {
                                                        setValue("tags", selectedTags.filter(
                                                                (t) => t.value !== tag.value,
                                                            ),
                                                        );
                                                    }
                                                }}
                                            />
                                            <label htmlFor={tag.value}>{tag.label}</label>
                                        </div>
                                    );
                                })}
                            </div>
                        </Label>

                        <Label className="block mb-3">
                            <p className="mb-2">Изображении</p>
                            <Input
                                onChange={(event) => {
                                    if (!event.target.files) return;

                                    handleImage(event.target.files[0]);
                                }}
                                type="file"
                                className="bg-[#EEF3F4] focus:border-red-600 focus-visible:ring-0"
                            />
                        </Label>

                        <ul className="flex">
                            {images.map((image, index) => (
                                <li key={index} className="w-15 h-15">
                                    <img
                                        src={image.previewUrl}
                                        alt={`Изображение`}
                                        className="w-15 h-15 object-cover rounded-lg"
                                    />
                                </li>
                            ))}
                        </ul>

                        <Label className="block mb-3">
                            <p className="mb-2">Категория</p>
                            <Select onValueChange={(type: TypeChairType) => setValue('type', type)}>
                                <SelectTrigger className="w-full cursor-pointer bg-[#EEF3F4]">
                                    <SelectValue placeholder="Выберите категорию" />
                                </SelectTrigger>
                                <SelectContent className="cursor-pointer" position="popper">
                                    <SelectItem value="chair">Стулья</SelectItem>
                                    <SelectItem value="table">Столы</SelectItem>
                                </SelectContent>
                            </Select>
                        </Label>

                        <Label className="block mb-3">
                            <p className="mb-2">Характеристики</p>

                        </Label>


                        <Label className="block">
                            <p className="mb-2">Описание</p>
                            <Textarea
                                {...register("description")}
                                className="resize-none"
                                placeholder="Введите описание..."
                            />
                        </Label>

                        <div className="flex justify-between mt-3">
                            <Button
                                className="bg-[#F3F6F8] text-gray-900 hover:bg-gray-500"
                                onClick={() => setIsActiveModal(false)}
                            >
                                Отмена
                            </Button>
                            <Button type="submit">Добавить товар</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

