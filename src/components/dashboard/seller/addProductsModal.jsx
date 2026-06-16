"use client";

import { AddProducts } from "@/lib/action/products";
import { imageUpload } from "@/lib/imageUpload";
import { Button, Input, Label, Modal, Surface, TextField, TextArea } from "@heroui/react";
import { ShoppingBag, ArrowUpRight, X } from "lucide-react";

export default function AddProductModal() {

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const file = formData.get("image")
        const image = await imageUpload(file)
        
        const products = {
            ...data,
            image: image.url
        }
        await AddProducts(products)
    }

    return (
        <Modal>
            <Button 
                variant="secondary"
                className="bg-[#2c221e] text-[#ebdcc9] hover:bg-[#4a3b35] font-bold uppercase tracking-widest px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 text-xs border border-[#4a3b35] shadow-md"
            >
                <ShoppingBag size={14} />
                Add Product
            </Button>
            
            <Modal.Backdrop className="bg-[#2c221e]/30 backdrop-blur-md">
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl bg-transparent border-none shadow-none m-4">
                        <Modal.Body className="p-0">
                            <Surface className="w-full p-8 md:p-10 rounded-3xl border border-[#dfcbaf] bg-[#ebdcc9]/90 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(44,34,30,0.15)] text-[#2c221e]">
                                
                                <div className="relative flex items-center justify-between pb-4 mb-6 border-b border-[#dfcbaf]">
                                    <div>
                                        <Modal.Heading className="text-2xl font-black uppercase tracking-tight text-[#2c221e]">
                                            Add New Product
                                        </Modal.Heading>
                                        <p className="text-xs font-semibold text-[#2c221e]/60 mt-0.5">
                                            Publish a new showcase asset to the global catalog
                                        </p>
                                    </div>
                                    <Modal.CloseTrigger className="p-2 rounded-xl bg-[#2c221e]/5 hover:bg-[#2c221e]/10 text-[#2c221e] transition-colors cursor-pointer">
                                        <X size={16} />
                                    </Modal.CloseTrigger>
                                </div>

                                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                                    <TextField isRequired name="title" type="text" variant="secondary" className="w-full">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-[#2c221e]/80 mb-1.5 block">Product Title</Label>
                                        <Input 
                                            placeholder="Premium Leather Artifact" 
                                            className="w-full bg-[#ebdcc9]/20 border border-[#dfcbaf] hover:border-[#2c221e]/40 focus:border-[#2c221e] rounded-xl text-sm font-medium text-[#2c221e] transition-all duration-200 py-1.5"
                                        />
                                    </TextField>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <TextField isRequired name="price" type="number" variant="secondary" className="w-full">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-[#2c221e]/80 mb-1.5 block">Price (USD)</Label>
                                            <Input 
                                                placeholder="0.00" 
                                                className="w-full bg-[#ebdcc9]/20 border border-[#dfcbaf] hover:border-[#2c221e]/40 focus:border-[#2c221e] rounded-xl text-sm font-medium text-[#2c221e] transition-all duration-200 py-1.5"
                                            />
                                        </TextField>

                                        <TextField isRequired name="quantity" variant="secondary" className="w-full">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-[#2c221e]/80 mb-1.5 block">Stock Quantity</Label>
                                            <Input 
                                                placeholder="100" 
                                                className="w-full bg-[#ebdcc9]/20 border border-[#dfcbaf] hover:border-[#2c221e]/40 focus:border-[#2c221e] rounded-xl text-sm font-medium text-[#2c221e] transition-all duration-200 py-1.5"
                                            />
                                        </TextField>
                                    </div>

                                    <TextField isRequired variant="secondary" className="w-full">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-[#2c221e]/80 mb-1.5 block">Product Image</Label>
                                        <div className="relative w-full flex items-center bg-[#ebdcc9]/20 border border-[#dfcbaf] hover:border-[#2c221e]/40 rounded-xl transition-all duration-200 p-1">
                                            <input 
                                                name="image" 
                                                type="file" 
                                                accept="image/*"
                                                className="w-full text-xs font-bold text-[#2c221e]/70 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-black file:uppercase file:tracking-widest file:bg-[#2c221e] file:text-[#ebdcc9] file:hover:bg-[#4a3b35] file:transition-colors file:cursor-pointer cursor-pointer" 
                                            />
                                        </div>
                                    </TextField>

                                    <TextField isRequired name="description" type="text" variant="secondary" className="w-full">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-[#2c221e]/80 mb-1.5 block">Description</Label>
                                        <TextArea 
                                            placeholder="Elaborate on the craftsmanship, premium specifications, and design intricacies..." 
                                            className="w-full bg-[#ebdcc9]/20 border border-[#dfcbaf] hover:border-[#2c221e]/40 focus:border-[#2c221e] rounded-xl text-sm font-medium text-[#2c221e] transition-all duration-200 min-h-[90px] p-3"
                                        />
                                    </TextField>

                                    <Modal.Footer className="flex items-center justify-end gap-3 pt-4 border-t border-[#dfcbaf]/50 mt-2">
                                        <Button 
                                            slot="close" 
                                            variant="secondary"
                                            className="bg-transparent hover:bg-[#2c221e]/5 text-[#2c221e] font-bold uppercase tracking-widest px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                                        >
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            slot="close"
                                            className="bg-[#2c221e] text-[#ebdcc9] hover:bg-[#4a3b35] font-bold uppercase tracking-widest px-6 py-3 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5 group text-xs cursor-pointer"
                                        >
                                            Publish Product
                                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </Button>
                                    </Modal.Footer>
                                </form>

							</Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}