import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main
        className={openSans.className}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: 16,
        }}
      >
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          molestie augue id arcu luctus interdum. Aenean sapien leo, efficitur
          id sem non, tempus rutrum ex. Praesent justo sapien, ultrices in elit
          ut, blandit scelerisque nisl. Sed id mauris turpis. Proin fringilla
          fringilla tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer feugiat justo at erat pharetra, non interdum
          eros vestibulum. Mauris volutpat commodo nisl vel hendrerit. Quisque
          euismod pellentesque urna, ac porta magna laoreet finibus. Integer ac
          nulla a sapien accumsan sollicitudin. Nam a diam quis nunc tempor
          tempor ac quis lacus. Cras euismod leo nunc. Duis sit amet condimentum
          diam. Phasellus orci ex, tempor sagittis molestie in, consectetur sit
          amet nisi. Fusce luctus tortor in elit convallis suscipit. Duis id
          efficitur lorem. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Vivamus sodales elit metus, at
          malesuada diam condimentum nec. Cras semper sollicitudin lobortis.
          Aenean dictum egestas lacus, vel varius lectus placerat id. Nullam
          vehicula egestas ex, varius rutrum nunc commodo sed. Fusce venenatis
          ut mauris et placerat. In mauris risus, posuere non mattis nec,
          bibendum at sem. Vestibulum iaculis, libero dignissim hendrerit
          tempor, massa sapien consectetur eros, eget ultricies mauris felis
          eleifend ligula. Aenean et lectus leo. Curabitur ac dolor ligula. Nam
          lorem justo, aliquam non dolor sed, ullamcorper mollis eros.
          Pellentesque suscipit vehicula pretium. Aliquam placerat purus
          lobortis, venenatis quam vitae, convallis est. Integer eleifend
          facilisis congue. Cras vel odio non augue gravida congue sit amet et
          sem. Duis aliquam, augue vel feugiat dictum, orci neque sollicitudin
          nibh, eu cursus nisl urna nec lacus. Etiam sed arcu convallis,
          ultrices risus et, consectetur nisi. Nunc vehicula laoreet
          ullamcorper. Fusce luctus tellus eleifend, elementum tellus ac,
          imperdiet quam. Ut mattis tristique justo nec tristique. Aenean ac
          nunc ut tellus pretium fringilla ac non leo. Maecenas varius, ante
          egestas consectetur finibus, sapien eros mattis ligula, non cursus mi
          magna sit amet nunc. Sed porttitor eros id dui placerat rutrum. Nulla
          interdum felis ac libero suscipit, at pretium turpis congue. Maecenas
          sed nulla a est hendrerit pretium nec vel turpis. Integer vel pharetra
          enim. Maecenas vel pharetra lorem. Curabitur ut nisi ac turpis
          pulvinar suscipit. Fusce facilisis, nunc vel maximus laoreet, nibh leo
          congue nibh, a tristique dolor neque at eros. Donec finibus ornare
          felis sit amet ullamcorper. Integer pulvinar vel lorem et vestibulum.
          Duis porta nibh vitae lorem pulvinar, eu mollis arcu pellentesque. Nam
          aliquam blandit ligula, vitae molestie nisl sagittis in. Phasellus
          auctor nulla ut massa convallis, in ultrices magna elementum. Fusce
          nec lacus semper, lobortis felis at, convallis ante. Sed dapibus augue
          eu lectus scelerisque gravida. Pellentesque commodo nibh at felis
          pharetra, id scelerisque ante ultrices. Fusce viverra non risus id
          blandit. In imperdiet tortor nec mauris laoreet consectetur. Proin
          elementum suscipit nulla, nec fringilla metus viverra non. Sed congue
          vestibulum felis ut laoreet. In nec commodo libero. Pellentesque id
          nibh at justo blandit eleifend vitae sed urna. Proin consequat nunc
          eget risus pretium consequat. Sed at sodales dolor. Mauris tellus
          risus, finibus quis massa ac, eleifend fermentum nibh. Praesent
          sodales nibh dictum, euismod justo eu, tristique sapien. Integer
          libero augue, congue eu placerat a, ullamcorper eget ante. Nunc turpis
          velit, viverra vel eleifend non, consequat eget felis. Morbi eu mi
          vitae risus consectetur hendrerit. Etiam venenatis elementum justo
          vitae commodo. Proin in tempus leo, non tempus enim. In ultricies
          tempus erat non condimentum. Fusce sit amet turpis laoreet, imperdiet
          mi sed, molestie ipsum. Integer gravida, risus ac malesuada efficitur,
          velit lectus bibendum risus, vel consectetur augue arcu id nisi.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. In at congue lectus. Donec placerat cursus
          odio in lacinia. In ornare diam dui, nec placerat risus tincidunt et.
          Duis id purus massa. Integer eget bibendum nisi. Duis eu magna in elit
          eleifend tristique pretium vitae ante. Pellentesque non posuere velit.
          Aliquam interdum luctus mi eu sodales. Duis eleifend diam ut accumsan
          faucibus. Nam placerat suscipit porta. Donec augue magna, consequat
          commodo arcu sit amet, scelerisque fermentum ipsum. Quisque convallis
          ante at justo tincidunt eleifend a at orci. Nunc interdum, tellus in
          imperdiet dictum, elit nisi fringilla dui, nec auctor nulla odio in
          diam. Nam eget convallis velit. Integer ut urna tellus. Fusce sed
          aliquam ipsum. In et scelerisque sem. Nullam egestas imperdiet est,
          nec tempor lectus tristique ac. Aenean commodo at nulla sed dictum.
          Fusce vel diam cursus, pretium quam eu, facilisis sapien. Vestibulum
          vitae egestas purus, et interdum odio. Morbi lobortis interdum nulla,
          sed pulvinar nulla fermentum ultricies. Nunc et massa ex. Etiam
          accumsan, erat id pretium pretium, ligula augue interdum ante,
          tristique aliquet mauris diam ornare ipsum. Fusce ut lacinia nunc,
          eget iaculis felis. Duis a dignissim magna. Curabitur sollicitudin
          mattis mattis. Cras lacinia lectus mauris, quis lacinia felis varius
          ut. Ut ornare eleifend ligula quis vestibulum. Sed mi sapien, faucibus
          eget gravida vel, fermentum sit amet orci. Nulla vitae dictum velit,
          nec tincidunt velit. Vestibulum luctus elit at tincidunt porttitor.
          Fusce molestie ultricies vehicula. Pellentesque risus lacus, pharetra
          at cursus vitae, aliquet in nibh. Pellentesque vitae diam tortor.
          Aenean at velit finibus leo ultricies volutpat vel ac sem. Duis eu
          augue vel lacus consectetur euismod eu vel nunc. Donec gravida dolor
          vitae tincidunt dictum. Aenean et lobortis lacus. Nullam nec
          sollicitudin tortor. Morbi a ante luctus, maximus erat id, malesuada
          dui. Etiam metus diam, lobortis vel velit vitae, pulvinar finibus
          lectus. Vivamus ultricies congue ante aliquet placerat. Donec sed
          hendrerit ex. Sed consectetur fringilla massa non posuere. Praesent
          interdum lectus et lacus tempor tincidunt eu id lacus. Cras a mattis
          lorem, hendrerit vulputate lacus. Etiam sed diam sit amet tortor
          imperdiet gravida. Vestibulum commodo vehicula nisl, vitae volutpat
          neque blandit vitae. Nulla facilisi. Suspendisse elementum luctus
          ligula nec blandit. Nulla mollis mauris et auctor semper. Phasellus
          molestie ipsum eget est mattis, ut bibendum turpis ultrices.
          Pellentesque convallis ultrices aliquam. Phasellus non urna et metus
          laoreet ornare. Phasellus maximus magna leo, eu tristique ex finibus
          in. Cras hendrerit tempus pulvinar. Praesent pellentesque ut orci in
          pellentesque. Curabitur dui ex, congue a eleifend et, placerat ut
          ligula. Nunc tincidunt lobortis neque. Donec gravida ex nec lacinia
          convallis. Praesent nec nunc at urna maximus auctor. Etiam id dui
          ligula. Vivamus imperdiet vel tellus sit amet ullamcorper. Suspendisse
          ac molestie eros, at convallis ex. Donec aliquet neque id viverra
          vestibulum. Morbi sed bibendum quam. Donec eget tellus quis lacus
          laoreet sagittis. Nulla sem tortor, finibus vitae tincidunt ut,
          vestibulum et purus. Proin porttitor pretium metus. Mauris elementum
          metus augue, sed dignissim erat ultricies ut. Etiam pharetra orci
          vitae dignissim sagittis. Phasellus eros mauris, posuere ut felis
          vitae, euismod dapibus quam. Ut quis sem nulla. Cras magna risus,
          elementum vel nibh sed, hendrerit aliquam magna. Ut euismod sapien
          lobortis orci porttitor bibendum. Mauris ut lectus et lectus porta
          finibus. Praesent accumsan nibh vitae odio sollicitudin tempus.
          Curabitur malesuada sed arcu sed auctor. Morbi ac consectetur augue,
          in efficitur dui. Cras volutpat feugiat nisi eu tempus. Maecenas nec
          mauris in sem vehicula blandit et sit amet justo. Nunc in tempus
          metus. In eget enim eu eros blandit bibendum quis id nulla. Aliquam
          quis turpis dui. Aliquam placerat ullamcorper maximus. Etiam aliquam
          ipsum nulla, nec sodales enim finibus nec. Cras malesuada libero diam,
          rutrum mollis nisi dapibus eget. Donec dolor tortor, accumsan
          fringilla efficitur eget, varius a sem. Donec pharetra odio lacus, sit
          amet gravida justo accumsan et. Proin vitae tincidunt metus.
        </p>
      </main>
    </div>
  );
}
