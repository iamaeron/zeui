import { component$ } from "@builder.io/qwik";

interface IRadio {
  text: string;
  name: string;
}

const Radio = component$<IRadio>(({ text, name }) => {
  const result = Math.random().toString(36).substring(2, 7);
  const id = name + "-" + result;

  return (
    <div class="group/meow flex items-center">
      <input
        type="radio"
        name={name}
        id={id}
        class="peer hidden outline-none"
      />

      <label
        for={id}
        class="group flex cursor-pointer rounded-full border border-neutral-300 p-1 outline outline-2 outline-offset-2 outline-transparent focus-within:outline-violet-500 group-hover/meow:border-neutral-500 peer-checked:border-violet-500 dark:border-neutral-700"
      >
        <span class="h-2 w-2 rounded-full peer-checked:group-[]:bg-violet-500"></span>
      </label>

      <label
        for={id}
        class="inline-block cursor-pointer pl-2 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
      >
        {text}
      </label>
    </div>
  );
});

export default Radio;
