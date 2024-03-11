import { A } from "@solidjs/router";

function RouteButtons({ text, showOption, route}) {
    const textArray = text.split('')

    return (
      <A href={route} class="relative text-center overflow-hidden">
        {textArray.map((item, index) => (
          <span
            class='inline-block text-base sm:text-xl'
            style={
              showOption()
                ? {
                    animation: `appearIn ${
                      (400 / textArray.length) * (index + 1) + 600
                    }ms ease-in-out forwards`,
                  }
                : ''
            }
          >
            {item}
          </span>
        ))}
      </A>
    )
}

export default RouteButtons;