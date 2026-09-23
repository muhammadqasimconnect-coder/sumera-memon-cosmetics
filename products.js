// Sumera Memon Cosmetics product catalogue
const PRODUCTS = [
  {
    id: 1,
    name: "Morphe Highlighter Pencil",
    category: "makeup",
    type: "Highlighter Pencil",
    tag: "BEST VALUE",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "morphe-highlighter",
    shades: ["Oh Brow Baby", "So Worth It"],
    description: "A precise highlighter pencil that adds soft brightness and definition wherever you want it. Easy to control, quick to blend and perfect for everyday makeup.",
    image: "assets/morphe-highlighter.jpg?v=20260903-3"
  },
  {
    id: 2,
    name: "Lilybyred Glassy Layer Fixing Tint",
    category: "makeup",
    type: "Korean Lip Tint",
    tag: "K-BEAUTY",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "lilybyred-glassy-tint",
    shades: ["One Colour"],
    description: "A Korean-inspired lip tint with a lightweight feel and glossy, glass-like finish. Gives lips an easy polished pop of colour and shine.",
    image: "assets/lily-product-clean.webp?v=1"
  },
  {
    id: 3,
    name: "2 in 1 Two Tone Bitten Lip",
    category: "makeup",
    type: "Two-Tone Lip Colour",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "two-tone-bitten-lip",
    shades: ["Pink Two Tone"],
    description: "Create a soft gradient bitten-lip effect in one swipe. The two-tone stick blends complementary shades for a cute, effortless everyday lip look.",
    image: "assets/two-tone-product-clean.webp?v=1"
  },
  {
    id: 4,
    name: "Nashami Big Eyes 3 in 1 Effect Mascara",
    category: "makeup",
    type: "Mascara",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "nashami-big-eyes-mascara",
    shades: ["One Colour"],
    description: "A 3-in-1 effect mascara for a fuller, longer-looking and more defined lash look. Its sleek design makes it an easy everyday pick for polished eye makeup.",
    image: "assets/nashami-mascara-product.webp?v=1"
  },
  {
    id: 5,
    name: "Wardabeauty Shiny Liquid Eyeliner",
    category: "makeup",
    type: "Liquid Eyeliner",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "wardabeauty-shiny-eyeliner",
    shades: ["One Colour"],
    description: "A shiny liquid eyeliner made for crisp, defined eye looks with a touch of glamour. Its fine applicator style makes it easy to create clean lines for everyday or party makeup.",
    image: "assets/wardabeauty-eyeliner-final-binary.jpg?v=20260904-1"
  }
  ,{
    id: 6,
    name: "Kylie Matte Charm Lipstick",
    category: "makeup",
    type: "Matte Lipstick",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "kylie-matte-charm-lipstick",
    shades: ["Dark Pink", "Brown", "Maroon", "Nude Pink", "Nude Brown", "Purple"],
    description: "A bold matte red lipstick with rich colour payoff and a smooth, glamorous finish. Perfect for everyday glam or party looks.",
    image: "data:image/jpeg;base64,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"
  }
  ,{
    id: 7,
    name: "Charmrouse Waterproof Eyeliner",
    category: "makeup",
    type: "Waterproof Eyeliner",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "charmrouse-waterproof-eyeliner",
    shades: ["Black"],
    description: "A sleek waterproof eyeliner for clean, defined eye looks. Easy to use for everyday lining or a sharper glam finish.",
    image: "assets/charmrouse-waterproof-eyeliner-fixed.jpg?v=20260918-2"
  }
  ,{
    id: 8,
    name: "Makeup Combo Deal",
    category: "makeup",
    type: "Full Makeup Combo",
    tag: "DEAL",
    price: 1000,
    shades: ["Complete Combo"],
    optionLabel: "Deal",
    offer: "Special deal: 1 complete makeup combo for Rs. 1000",
    description: "A value-packed makeup combo featuring a highlighter palette, two-tone bitten lip, mascara, highlighter pencil and eyeliner in one ready-to-order deal.",
    image: "assets/makeup-combo-deal-final-fixed.jpg?v=20260919-1405"
  }
  ,{
    id: 9,
    name: "Beauty Combo Deal 2",
    category: "makeup",
    type: "Beauty Combo",
    tag: "DEAL 2",
    price: 1000,
    shades: ["Complete Combo"],
    optionLabel: "Deal",
    offer: "Special deal: 1 complete Beauty Combo for Rs. 1000",
    description: "A complete beauty combo featuring a 9-shade highlighter and contour palette, 2 in 1 Two Tone Bitten Lip, Nashami Big Eyes mascara, Morphe highlighter pencil and gold liquid eyeliner.",
    image: "assets/beauty-combo-deal-2-v2.svg?v=20260921-1235"
  }
  ,{
    id: 10,
    name: "Sumera Memon Herbal Shampoo",
    category: "haircare",
    type: "Herbal Shampoo",
    tag: "NEW",
    price: 250,
    optionLabel: "Choose size",
    sizes: [
      { label: "85ml", price: 250 },
      { label: "170ml", price: 500 },
      { label: "360ml", price: 950 }
    ],
    shades: ["85ml"],
    offer: "85ml — Rs. 250 • 170ml — Rs. 500 • 360ml — Rs. 950",
    description: "A jari booti herbal shampoo formulated for everyday hair care. Helps reduce hair fall, supports darker-looking hair and helps remove dandruff.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCADwAPADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUCAwYBAAf/xABDEAACAQMCAwUFBgMGBQQDAAABAgMABBESIQUxURMiQWFxBhQygZEjUqGxwdEzQmIVJDRy4fBzgpKi8QcWJTVTdLP/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAKREAAwACAgICAgICAgMAAAAAAAECAxESIQQxE0EiUTJhFCNxgQVCYv/aAAwDAQACEQMRAD8ABawMcaBQWY7mouDrGf5aa9sHnULgKfGhb1VtWLYyG8a8Sbe9M+pV8fZCCXIx0qyS4BGCd6VrcAEkVVJcb86cse2NaWthplw3OvTMJExQCz6ufOp9rtitcaEctC+5QpIT4VWOoo64QlAzLgN8J60JDbyytII11BFLsc4AAp89oW6S7PA6h51NWxsaoDeNWg6h51oaosPKq2XNVyXkUJ06XdunIVGGW7u3021uv+/MnFEofsmvy8aevZx0xVbDajmt76JA8zwqCcYVlJ+goe5klSFn7XcEDAUj9KNL+yS8/wD8sDYYNTErBcZ2rk8tzAy9qF7yhhqRTkGioLqT3B3MMWXYIjLGoINHxJ3n/QCdzRlree7IQBvVMsehEy6u5BLYNVUNSqWmHGWoe5CoS9zMSzUeYGXA8KC4bDJLONA2HOn5t2kkVBzG5qbLSl6CiXke6K4rJmjBOwqbywWcJwQXNW8Qv4rS2MWe/isyk3aEs7ZJ60ONOls9qvImdQiUrGSRm6mrlmSO2KKvfPjXY4dSF/Co9ngEmm7E/G/5FCKACTVtrEss4DfDQ5fvEHlRNq6k88VtbSJ5uH1+gniXZxaFhA254oOG7MDFmGTRLqHceNB3UWl+VDj1riyPNvlyRUztcT5bcseVaGGAQ2xZhgAZNKOExdpdjI2G9G8YvQYxbRn/ADGuyflSlApJLkOooCCqyPpxvmgL+d2LRh9Sg7UwSaKaYEnK9aX8Rhja8jjtyPtGC+majhfl2ezeNz39HkVUt7dIIRJcz5YtKMhVG2ccgM53PgKCuMS3cq2qlk1HSFBORVl3xEyXJRQBaqQoRQF1IvIE+Owq2fjH2Ugt4OxdxpEgbcLqLHHQnbfyqxIlV0uwAiSNVkZGVGJAYjY4502gtJvclGlUlumCJ2hC90eIB33OPoaWXfEZrtESTA0qFJHjir1u1MzyITpgttEWR44wT5bsxreIFXTQbd2U0847HSYBH9mxOAEXbJzyznPzrr2EyWMNtGAHuDqlbOdIOdI88gH6+dKW4jcPC0TSdxlVWAAGQOWfpRA4zcqE2jJjXCnTyPIH1AGPSuS0A+TWhZIvZSFCQSOhqSNvUWgfsDPj7MPoyTzOM1O5gNpKsTNmTSC4x8JO+Pyo2thTk09FqqjMCygnzFEDGnA5dKCR6IjegeymGv0dZaGvR/dm9RRqjUQBzO1PrL2VfiXaRpepH2TDWDFqDeO29ZNJNbFeS0oZkON/xIP+Ev5V2H/6lP8A9hfyp77UcEjsplaW6d9goCoAB+NEcC9mhxThzRx3jIHIYa4wdJHiN6f80a3s8f46Mm/xH1qOMmn3GOAScOacG4WUwKpc6dOcnG3zpKmA4J5ZrFSa2hqX7GvD5UtYSzbGjuGcRRriR5Dtjak11IrRBVNCIWzhc70h4laeyl18dJIK43Ms9+zocrS8ZzR7WE5+IIrH+V5FU/QnNCSwvDIUkRkYeBGKfC0tCLb3th8E+INNRkcsMDlQavpqZm2oXHZbPlJzxZCbAqCOy8q83eOami0f0S8edbG3DE7Uam8KrvkDucVRHfe7wlFG5q6zcTRsznepnLT5B2+XRCAtbBivxEULICWJJyxpx2BnH2YyRSueNkmKsMEVsUmzIxOn/Q/4OoeNlall/hLt1B2FMxNb2g1RuCGpTHIJuLIdSqrOMs2BAPE70vGuVNnq5syeNNB0XDWm9ziETd4drNKBsqHkM8uQz8xQN40kt5KzJpJ3CqchV8Bt0GKNa/aZLq7m1SJJKsaxk7BM6iB02AHzqTceUGXFtqMgKli2k6cEYAHLGfx+lCR5/Kk9nbTh8Js0WZkSa5HaBnBJSIHJI+QP1qF3Bjh7SWUb9lcOGbu40oDhF575O/yFdm4nbdrOwjaRZ4whx3dCjThB0G2/rVUvG7t5VkTQmhERFCjCaeWOm9aBqn2QThF1KyLGhBaQQgORkv8AzYx4A53oee2NvIqNLEwbHeRsgdfpVjcWvTylC4BUFVA0qc5A8tzUYbC5R+0eEBY0EzBzgFfAepxyrjU6XsadlZQzQ28rSTCyjM0qqAFLfEck7/dXkKjdcHc3JnMq9oQ0siMQe+Mbb88k75xtv0pU12WS8Lg9rckEsOmrUf0oPeiB4vYz4jBZ2kjW8ckklxHgO4xoLYGQPQ5oaI1QBV0YoKKMaaDYN5E9RX0P2Y/xF/8A5x+Qr57bLmRP8w/Ot1wHiFna3N6J7qGMs4wGcZOwqelukD5T/AR+3v8AEi9f3pt7C/4SP0pB7a39ndSJ7vcxSYO+lvWmfsXxOxt7dEmvIUfHwlhXcXxXX2SNrv8A4Kva0fa8U/4Uf/8AQVhcVtvaS5t7qTiLW88UqtEmCjA574rHaKbh6RzWyrBo21+wt3nX+IWCIfu7ZJ9eX1obTRNuQ8L25IDEhkJOATyx8/0prOn32et4e0WaZ1zHCuo5/mJOAPqfwqhXM8EsMm5jUyRnpjmPQj8RTyC+soeDXUF1CEu2IxHoIBxnG3zpLJmCKWSVFjlmXQkYGMA82I8Og9a2DslJnoPcGtFEzFZskkjO43wOnSptHw0hQs5BAxnfvHPjt0qm3vYooFjlg7Qb5Pj8QP6V1r6ATwyR2+kRtkjxIxgDNMEHpksxCTDI5k7uAfHr4VQDRH9oQi3ZFgIkdcM2eZ33/Gg1OaFoox0yxkDDNQjkaI4B2r2og1F9xms19M6v2aGwv0gRScHI3FL7q4El+7MMA0Fas3bLzIBqd4TJcakU7CkrEptjfnaS0PW4SiWeTJ3upNIZF0ORnNaXi8ck8ixKCgUb0llsyqsW8KDDba3TGvBkn66O8MjWe6jSUnsFzJJv/KBk/htRtxZ6Hu4reHU8tw0cSgZIVTk4+q0vt5Fh4fckMO1lKxgeOnmT+AFNL3jHY35ez7NxoB1EZwxOo/jt8qa97F72V29nGtoAwd7m5YxomkDRp+I5P0z61XDwuV45JZnS3iQKS8nLvch643qUnGGCwvCoWdY+zYlRpC75AHnnehLjiF1dIEnlLqDnGBzAxn6V2mcmxpDwU27QXN0waFcySqo5BQDjzzkD69KJnWS6jEMv2XaqZpiWA66Iweu2T86RQ3c8TFklbOMb7+XjTHhztHCL6d2kSFjoDHIB57eZJA+p8KxnNP2B8VtbezuDDFIZGUKG8jjfPz8PCgBU5HaR2dzlmJYnqTUBzog0ixBmmVvZqEWW7mjtYTuGk5sPJRuaBhGWA867OgW5V27WWTUGLMdvKsSTembkqpncmqgghgtu2tuF3F0AM9tdMIk+Sk5rNXd61rxJ7lYoIpGG6JIzAj67fWtJd8QuG4YgLgDGSAorF3UpeUswUk/0inTMr0edku6/kyN1dpcyamiRT/Tn9SalZ8Q90k1xINWNiSRj6EVQXPRf+kVWXOfD/pFFoXsecHcM7/YQXBc5IeXT+e1GcQsVt1EksE1qG5Fu8h9GGaRWMzxzBl0g/wCUVo+IX88vDOzkYFSpGNI8aGpXtjcdV6QqKDGQQR4EHINDSLiibONRC4QNpBDb+Gx5f78KhMMZpe1vodUtLsjC94YyUuWihTYs0hCjy/0FVG17VvsrmKeQn4csGY+WQM0ytuGtxPiiWKyCKKGPLMfAYBJ9STThuF2HB/ZW4uJgsl5PGY1dvvHwX06+Va7S6E6bMUykEgggjYio6T0OfSjLpjKLac7ySLhv6iDjP0xR091LG2qWx0tqbDDBIySSOX9QpgIkAq1dhR1+4l7sdn2WW1KQuCV5bgUKtvMwbTG3d2PhjYn8gaxjYrRDAqLV1o5UXUyMB5jlVltA1w+kVj67Y2fzfGQnhyBSWYZFGLLArNlNzUI/7ohVhmqYlMj622Wpn+TbNuLhaZq72WNptxjIpVdoq2zkYY1oFs7PiUkjozdnH3V3xQF/w5YlKqxZBUcWk+J6OLO2tV9mMYFWORiuA70x4pAqAMvPpS2JGkkCJ8R5ZOK9KXyWyPNDxVosrw51YttPthM5UMMHwJwKIUXkeQAgwM7qvl+4rdAKhq0PCrT2cLsyTcQnUaRqyZenRweO9ZuM+w3R23/aXkbBo/PstbcTrznR/8AxkGx/wDYMO+h+TiIqdlDG0odOFf/AC8X4drNDWFrgl+5XzFrv/VTbpEhUKTnqZ1R5B2UqXd0JVoovDaLRcIbG/XurflxoTOSdoXZ2/wA+4o6+RNnaHZVmXl/II5f3J9wd6JebQVXL5Eqg8o2TfKNjpoPmPcaL80UmQbDzCw/5H9ffvzhS6fS6ZspUMcnfH5UOH0p4Yv8A2FzRgs+LAx9h9UwfIrD5UWg2zupXvkvQxxBz/ACKx8xf5UW/9w6VT/ADHVR76iRF2wVJwI50YvRC+aWs2o5+11P6u9QeQ7JwM80y0VQYlXJ3kMdvpV7oYbsbavLmUEgdPE7dOnNj0p86DajefZBOq5/u7UoCy/G6E9VzjTJhpbby2YgV7V7kkuUKjMQOuk+VDfaOLVaOzgxYkjbyyVBk1Un77bo6eFuNUx9k3SpKpcKW4D1J6dKiKq5RjxB+0G7PtXN7vSlmFhkMpB5J8KvcK9sF0ZSWQRRQxGqg4CjNB4nVN/WrmSY6IMHFJ2d1yNzxmio67k1rzZHxmQ5hXrA2PH0jA70h0ZLps6hHAgoMw+6HUVAoQtsc5J2OL6ZPH6Gslzae5Kc8ZLJMbHr6nzpCuDwPYTZTIBuU8uvCdvTrTI5HaWIJt7fZl+IrGBf2DkqJrJ20DJ3zkHlWW6soOp9TF5LUDtNpwo/wArK9+an1bQI/TGNpe83Uh2kcuICvuf8yx+R9KzE4vHNl/ZHwslrhJmKOP+2K2eMj8yfHmSuS7ESKKQJH48h4nAx68vfkj51el6V7fFv2zHs0a5OOG+Xv7o+fOpdgXgcSvbVDNOoRLje2ppNjvYpiUh28WOd6HrYiWAp/mEmPlU8KO/iLFiT0wqOVu/XziqNZGUMrqbUdvjEFJ5joT/No3UMruEt1zt7bnKjoEN2Ohk4z5yBzpbmSDArBphHOg/Dk4oKKAp3icYx18xnv+wFPzJhlCTnWibwRdJPEsUPdyYnI5ZfpRsXjrP4d4i8lgKC8d+vn1o8xbyPGx5KCoCuj/4qd6BbfRV/wAIcxyDAH4CpTsgtctuxSsDgpYSFXOeY4OnyPdNoL+BFvcSWpmtis0pY7JO5BIBB9BxhQH4UmiOQoW8OjIBx+nGnHKWj8ZnIfWLnkHoKxGSGzKqNHpQK2U3u+2rC1xKzSHcjHhkLnDHrg8j/OnKzqJUOrjyrGrIRt74oDfEZAtZbt41byk/wAdNVSaf2tJcMxjh2aVWLHViOTgduZo79KlMKMKTn1tqLVqRqIzcMDDiMg1zNdsFaQGcgjOatAk84RFkKBY2PClJNRrmeNX4VaH/AFGmENqTgnKCRnHz4+tdqNimW5jkRIya8PKFPHlR3FG+rWx2Fo2U8zsgBWBPSbeoq7iDbqc9yzBt5m5rJHjIJ9Pc5MeVYG2l7MBvPFMmCQrDHjmi3hcSB7VuNMEJ7+fGKlZxzuW2kFQ10+QJPCuj3SF26fMFyVLY7X8aHOeVc3Ri3L8YzQYQQRhwyI5lOTjOe1jnjRnAzW9rhkJZ3j7ZJ/t8OZYU9NjqDxqsjnfJqQkqymIx5dgME98qjT6QqJBHw3O+C4qRaKZ2f0qJDhlYqsF4GOtIzdcYxSmQMMBRiCQRmk43IE1mhnz42rKjEDoUljUBy7BH0p07yzjQgJRhSQfb6b5UlmnjzvkyuVLA/EqeRzqKEeZPllnVOudDGsuCEbVss27sc/gadFgubYnkIO4M3Geg+dTZ40Ajw5GUH1A7J+NRLmgTShYEhbGvr11ZRqPYH1sSq7+biZgFMknUH+OtZOkjQLz86AtJJGZW4OcYO7FeAXwTsSxP4aYwQ+MZqzaPEIAUCIAd4HjUOFrlYpXRFnfJiCaDDppPGM0H+gHeFWO4ByssjYB78ig50SKO6uQY0xL1YSVbeV3RO0k6TjKoj3h2GKn07g4PAUfemxCY+RPdYY2P2dKm2nAJJcAwafgy4o+8+ilx5edCVcXczSGHcfCf1GcZrIJSwUfduHDNSvNEABbJtJ/zz41rg1TynHTas8FXbdtdCTgA78oJ3gL2PcC8nWuxRSvbeMuWpDjDTYv2fAyhI8QRXCNmYwBgCgkHnWmYcdESh92tdbdh0ufjU12deR1Z/SsdtmARZUk5JI6GrNqU3yRXY1s9jqF9CnEI5LnC/l1IHqNzdqxaJAIY2OQH1pM7NhZScEnnpTRXts+BiyXOax4hHDeU2xigGPiOvpVqkQnIyTgVhhGaDYZhuJAMGyPXElW/wCNYSy6wQoAY1MbyBTqZRQw6lj8jvw9qTHnZ7gSgAxnzrMsAro2TnFHg2TLJyT+XWqkfhbl5uc0m0hkYikbsPX91VPhhPEJWUtseYEeVPnuSg/P60XnS50N7HFh6MPip4uGPMkUO0k11jSJGiOCbnwIrWFyCB+dRsxHSjB70kwOqAfEIx06mtRxaq3QQR/55PKgT4KKPTatL8oiNxv0GsEneHzPtVgSxI6dAaipnh/uN+BhgTsnA8T6VlUQwjDBgOM06Dg13SK6GMZl4HrjsK2d1M6SQSCPpVH+o/ZldF+79qcR2cTS4wTOjdFRPR/kNWTXt28F/Z7XYj/AESvZh0I6aqJVJDKnwx3cp51naKJBKBz69jQqnhvsm6PFUVUkBRjzgGmVNkiuzBjnXmWO2PrWmcY8SaeZ8KWNCFDAlhEx49nt61GGKiSnquTq42RJj7WeVJfLx8qsmZHA+xZR94mwrsoqsTEH3YxqtZCBkbt3FFylTZg5wQQDaPAav+tAcN92hjzn51VFWCkjbnUHI1ndXsLEke+bTKxHbeCmSSToqgZ9pzWoeF9bBmVFKlrGuCfEQCdqkDHJRmbxzhzOguVL7CkW+UYGAOWVN4QrHt71lbpjWbz82CBx45gm6E1xdRNez3kcqxjkjlyPtTHww7D/JRQo0g+XHM6KxLb+crjgirSLu3I2jXOCfZ9qgK7jtn+WzocUq/iRW6JjSO4OCMWPfnSLdrWRsvTCmN40obZd+SKQZFWKJwE6BRuOQ3fWr18WqG4DCJ3B8O3QrmxWkkBiwPqMb+VVYzcRlhCiSEce/c81rqVIHWDn/UcaG/iNCbsBXBVwc7rf4VCZCq7cBCSSCa8jW9wQ59sG+MMolPIBH4/Nd7gERfb8jX66uThGyPbW0G3SD8RUPEk8mfC3RW4NtfZoGmTOvsiSbADj6VjZ52wW7WYX0a1Z7e5gdg3Lr0+9NZsHFCIV0CgbVRyyE4w6+RYqobRDRQwZkAUY6ikpWQhyRUGDx+FRKxWmU2zbv5a5gwAOU4hkc9KxOgDlmi7VtfpsJ5M8q9LXYJQ2RFXOIwd1+BOtdRqk4HC7rhCCMgcC83OT3IJPP6VkaEgsmcY43xqsIPjpVskcZ6VNmSLcLGvGNuT8qpBVwevWuseM7p9bWyF5Zux5MOpo+3BcB9biINrFRyNxuO2vSloIyBGCScfzqM8rSq3DbfKTy52GLZ/dI8+FRQrJcDCrJHkNu7b8eeo8qRbyLzcFKt4HjQ57G4KbgQ2MH1OpAqCu/KvO8hc81AAoKscgcg7u2TG/SF42iyLMoC8AE/Nt0J/Sp13Ao7WZ2PVEhvG4MOTn/LikszKSkrI7FuSM5+FeD8OC2SPcuQoZlXBG7ld+uT86wO0DOVrr+KptwZcfHGT3oj70aEqeTpWPPl67cPprRchGWPY5Nd2E9WiJDqWQ+xRuByNgcqye14XBcLCzyRBFcbkkgHrXA4B5eVAjJxkO5k4zRNuFuXBwfTkUWOYfgQdSkRh06LVYZxnHPrjvRv1qXUraRS+AZ/KudwMYHY0CbM6gZpTJn8Mp4xWqTawQoWkdt3H+8xc+lVkyBCR8QYFAom7/i4ZQiMv8AX/2Q=="
  }
];