uniform vec3 uColor1;
uniform vec3 uColor2;
varying float vElevation;

void main () {
    float elevation = vElevation + 0.5;
    vec3 color = mix(uColor2, uColor1, elevation);
    gl_FragColor = vec4(color, 1.);


    #include <colorspace_fragment>
}