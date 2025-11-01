/**
 * Mexendo o index.html com JavaScript
 */

    const carregar = () => {
        const tbody = document.querySelector("#id_dados");
        axios.get("http://localhost:3000/Produtos")
            .then((ret) => {
                ret.data.forEach((item, idx) => {

                const tr = document.createElement("tr");
                const td_id = document.createElement("td");
                const td_desc = document.createElement("td");
                const td_saldo = document.createElement("td");
                const td_preco = document.createElement("td");
            
            // Adicionando os td's nos tr's
                tr.appendChild(td_id);
                tr.appendChild(td_desc);
                tr.appendChild(td_saldo);
                tr.appendChild(td_preco);

            // Adicionando ao tbody
                tbody.appendChild(tr);

            // Colocando is valores nas td'
                td_id.textContent = item.id;
                td_desc.textContent = item.descricao;
                td_saldo.textContent = item.saldo;
                td_preco.textContent = item.preco;

            });
        });
};
carregar();