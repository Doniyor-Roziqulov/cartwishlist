import { useState, useEffect } from "react";
import axios from "@/api/index";

export const useFatch = (path, params, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        axios
            .get(path, { params })
            .then((res) => {
                setTotal(res.data.total);
                setData(res.data);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [...deps]);

    return { data, loading, error, total };
};
