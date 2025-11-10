import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    // 驗證邏輯
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "請輸入姓名";
        if (!formData.email.trim()) {
            newErrors.email = "請輸入信箱";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "信箱格式不正確";
        }
        if (!formData.message.trim()) newErrors.message = "請輸入訊息內容";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 提交表單
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("送出資料:", formData);
        alert("表單已送出！");

        setFormData({
            name: "",
            email: "",
            message: ""
        });

        setErrors({});

    };

    // 即時更新表單內容
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-1 mb-md-3">
                <label htmlFor="name" className="typo-body">姓名</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="請輸入姓名"
                    value={formData.name}
                    onChange={handleChange}
                    className="typo-body"
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="mb-1 mb-md-3">
                <label htmlFor="email" className="typo-body">客戶信箱</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="請輸入信箱"
                    value={formData.email}
                    onChange={handleChange}
                    className="typo-body"
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="mb-1 mb-md-3">
                <label htmlFor="message" className="typo-body">客戶訊息內容</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="請輸入訊息…"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="typo-body"
                />
                {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className="text-end">
                <button type="submit" className="btn  buttonCostum typo-headline">送出預約</button>
            </div>
        </form>
    );
}
